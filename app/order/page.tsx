"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Clock, ShoppingCart, CreditCard, Info, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { burgers, sides, drinks } from "@/lib/menu-data"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog"

type OrderItem = {
  id: string
  name: string
  price: number
  quantity: number
}

type OrderFormData = {
  name: string
  phone: string
  email: string
  pickupTime: string
  pickupHour: string
  pickupMinute: string
  fiscalCode?: string
}

type CardData = {
  cardNumber: string
  cardHolder: string
  expiryDate: string
  cvv: string
}

export default function OrderPage() {
  const { t, language } = useLanguage()
  const [cart, setCart] = useState<OrderItem[]>([])
  const [activeTab, setActiveTab] = useState("burgers")
  const [totalPrice, setTotalPrice] = useState(0)
  const [isPaymentOpen, setIsPaymentOpen] = useState(false)
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false)
  const [isPaymentComplete, setIsPaymentComplete] = useState(false)
  const [orderData, setOrderData] = useState<OrderFormData | null>(null)

  // Calculate earliest pickup time (30 minutes from now)
  const now = new Date()
  now.setMinutes(now.getMinutes() + 30)
  const earliestPickupTime = now.toTimeString().substring(0, 5)
  
  // Update business hours
  const openingTime = "11:00"
  const closingTime = "19:00"
  
  // Check if current day is a weekend
  const isWeekend = now.getDay() === 0 || now.getDay() === 6 // 0 is Sunday, 6 is Saturday
  
  // Get next available day if weekend
  const getNextBusinessDay = () => {
    const nextDay = new Date(now)
    while (nextDay.getDay() === 0 || nextDay.getDay() === 6) {
      nextDay.setDate(nextDay.getDate() + 1)
    }
    nextDay.setHours(11, 0, 0, 0)
    return nextDay
  }
  
  // If weekend, set earliest time to next business day at opening
  const adjustedEarliestTime = isWeekend 
    ? "11:00"
    : earliestPickupTime

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch
  } = useForm<OrderFormData>({
    defaultValues: {
      pickupHour: isWeekend 
        ? "11"
        : Math.max(11, Math.min(19, parseInt(earliestPickupTime.split(":")[0]))).toString().padStart(2, '0'),
      pickupMinute: isWeekend 
        ? "00"
        : earliestPickupTime.split(":")[1],
      pickupTime: isWeekend
        ? "11:00"
        : earliestPickupTime
    }
  })

  const {
    register: registerCard,
    handleSubmit: handleCardSubmit,
    formState: { errors: cardErrors },
  } = useForm<CardData>()

  const addToCart = (item: { id: string; price: number; translations: { [key: string]: { name: string } } }) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id)
    const itemName = item.translations[language].name

    if (existingItem) {
      setCart(
        cart.map((cartItem) => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)),
      )
    } else {
      setCart([...cart, { id: item.id, name: itemName, price: item.price, quantity: 1 }])
    }

    setTotalPrice(totalPrice + item.price)
  }

  const removeFromCart = (id: string) => {
    const itemToRemove = cart.find((item) => item.id === id)

    if (itemToRemove) {
      if (itemToRemove.quantity > 1) {
        setCart(cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item)))
      } else {
        setCart(cart.filter((item) => item.id !== id))
      }

      setTotalPrice(totalPrice - itemToRemove.price)
    }
  }

  const onSubmit = (data: OrderFormData) => {
    // Store the order data and open payment dialog
    setOrderData(data)
    setIsPaymentOpen(true)
  }

  const processPayment = (cardData: CardData) => {
    // Simulate payment processing
    setIsPaymentProcessing(true)
    
    setTimeout(() => {
      setIsPaymentProcessing(false)
      setIsPaymentComplete(true)
      
      // In a real application, this would send the order to a backend
      console.log("Order submitted:", { ...orderData, items: cart, total: totalPrice, paymentMethod: "card", paid: true })
      
      // Close dialog and show confirmation after 1.5 seconds
      setTimeout(() => {
        setIsPaymentOpen(false)
        alert(`Your order has been placed and payment processed! It will be ready for pickup at ${orderData?.pickupTime}`)
      }, 1500)
    }, 2000)
  }

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-2 text-center text-4xl font-bold">{t("order.title")}</h1>
        <p className="mb-12 text-center text-gray-600">{t("order.subtitle")}</p>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="burgers">{t("menu.tab.burgers")}</TabsTrigger>
                <TabsTrigger value="sides">{t("menu.tab.sides")}</TabsTrigger>
                <TabsTrigger value="drinks">{t("menu.tab.drinks")}</TabsTrigger>
              </TabsList>

              <TabsContent value="burgers" className="mt-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {burgers.map((item) => (
                    <Card key={item.id}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{item.translations[language].name}</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-gray-600">{item.translations[language].description}</p>
                        <p className="mt-2 font-bold text-red-600">{item.price} RON</p>
                      </CardContent>
                      <CardFooter>
                        <Button onClick={() => addToCart(item)} className="w-full bg-red-600 hover:bg-red-700">
                          {t("order.add")}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="sides" className="mt-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {sides.map((item) => (
                    <Card key={item.id}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{item.translations[language].name}</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-gray-600">{item.translations[language].description}</p>
                        <p className="mt-2 font-bold text-red-600">{item.price} RON</p>
                      </CardContent>
                      <CardFooter>
                        <Button onClick={() => addToCart(item)} className="w-full bg-red-600 hover:bg-red-700">
                          {t("order.add")}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="drinks" className="mt-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {drinks.map((item) => (
                    <Card key={item.id}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{item.translations[language].name}</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-gray-600">{item.translations[language].description}</p>
                        <p className="mt-2 font-bold text-red-600">{item.price} RON</p>
                      </CardContent>
                      <CardFooter>
                        <Button onClick={() => addToCart(item)} className="w-full bg-red-600 hover:bg-red-700">
                          {t("order.add")}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {t("order.cart.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {cart.length === 0 ? (
                  <p className="text-center text-gray-500">{t("order.cart.empty")}</p>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => removeFromCart(item.id)}
                            >
                              -
                            </Button>
                            <span>{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => {
                                const menuItem = [...burgers, ...sides, ...drinks].find((mi) => mi.id === item.id)
                                if (menuItem) addToCart(menuItem)
                              }}
                            >
                              +
                            </Button>
                          </div>
                        </div>
                        <p className="font-medium">{item.price * item.quantity} RON</p>
                      </div>
                    ))}

                    <Separator />

                    <div className="flex items-center justify-between font-bold">
                      <p>{t("order.cart.total")}</p>
                      <p>{totalPrice} RON</p>
                    </div>
                  </div>
                )}

                <Alert className="mt-4 bg-blue-50">
                  <Info className="h-4 w-4" />
                  <AlertDescription className="text-xs text-blue-800">
                    {t("order.form.anafNote")}
                  </AlertDescription>
                </Alert>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("order.form.name")}</Label>
                    <Input id="name" {...register("name", { required: "Name is required" })} />
                    {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("order.form.phone")}</Label>
                    <Input id="phone" type="tel" {...register("phone", { required: "Phone is required" })} />
                    {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t("order.form.email")}</Label>
                    <Input id="email" type="email" {...register("email", { required: "Email is required" })} />
                    {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fiscalCode">{t("order.form.fiscalCode")}</Label>
                    <Input id="fiscalCode" {...register("fiscalCode")} />
                    <p className="text-xs text-gray-500">{t("order.form.fiscalNote")}</p>
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      {t("order.form.pickupTime")}
                    </Label>
                    
                    <div className="flex flex-col space-y-2">
                      {isWeekend ? (
                        <Alert className="bg-yellow-50 border-yellow-200">
                          <Info className="h-4 w-4 text-yellow-600" />
                          <AlertDescription className="text-sm text-yellow-800">
                            We are closed on weekends. Your order will be scheduled for {getNextBusinessDay().toLocaleDateString()} at opening time.
                          </AlertDescription>
                        </Alert>
                      ) : (
                        <select
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-lg ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          value={watch("pickupTime")}
                          onChange={(e) => {
                            const [hour, minute] = e.target.value.split(":");
                            setValue("pickupTime", e.target.value);
                            setValue("pickupHour", hour);
                            setValue("pickupMinute", minute);
                          }}
                        >
                          {Array.from({ length: 33 }, (_, i) => {
                            const hour = Math.floor(i / 4) + 11;
                            const minute = (i % 4) * 15;
                            const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
                            
                            // Only show times between opening and closing, and after earliest pickup
                            if (time >= adjustedEarliestTime && time >= openingTime && time <= closingTime) {
                              return (
                                <option key={time} value={time}>
                                  {time}
                                </option>
                              );
                            }
                            return null;
                          }).filter(Boolean)}
                        </select>
                      )}
                      
                      <div className="text-sm text-gray-500">
                        {t("order.form.hours")}
                      </div>
                    </div>
                    
                    <input 
                      type="hidden" 
                      {...register("pickupTime", { required: "Pickup time is required" })}
                    />
                    
                    {errors.pickupTime && <p className="text-sm text-red-600">{errors.pickupTime.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center">
                      <CreditCard className="mr-2 h-4 w-4" />
                      {t("order.form.payment")}
                    </Label>
                    <div className="rounded-md border border-green-200 p-3 bg-green-50">
                      <div className="flex items-center space-x-2">
                        <CreditCard className="h-5 w-5 text-green-600" />
                        <p className="font-medium">{t("order.form.cardOnline")}</p>
                      </div>
                      <p className="mt-1 text-xs text-green-700">
                        {t("order.form.prepaymentNote")}
                      </p>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700" 
                    disabled={cart.length === 0}
                  >
                    {t("order.form.proceed")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Payment Dialog */}
      <Dialog open={isPaymentOpen} onOpenChange={setIsPaymentOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t("order.payment.title")}</DialogTitle>
          </DialogHeader>
          {isPaymentComplete ? (
            <div className="flex flex-col items-center justify-center py-6 space-y-4">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
              <p className="text-lg font-medium text-center">{t("order.payment.success")}</p>
            </div>
          ) : (
            <form onSubmit={handleCardSubmit(processPayment)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">{t("order.payment.cardNumber")}</Label>
                <Input 
                  id="cardNumber" 
                  placeholder="1234 5678 9012 3456" 
                  {...registerCard("cardNumber", { 
                    required: "Card number is required",
                    pattern: {
                      value: /^[0-9]{16}$/,
                      message: "Please enter a valid 16-digit card number"
                    }
                  })} 
                />
                {cardErrors.cardNumber && <p className="text-sm text-red-600">{cardErrors.cardNumber.message}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cardHolder">{t("order.payment.cardHolder")}</Label>
                <Input 
                  id="cardHolder" 
                  placeholder="JOHN DOE" 
                  {...registerCard("cardHolder", { required: "Cardholder name is required" })} 
                />
                {cardErrors.cardHolder && <p className="text-sm text-red-600">{cardErrors.cardHolder.message}</p>}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">{t("order.payment.expiryDate")}</Label>
                  <Input 
                    id="expiryDate" 
                    placeholder="MM/YY" 
                    {...registerCard("expiryDate", { 
                      required: "Expiry date is required",
                      pattern: {
                        value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                        message: "Please use MM/YY format"
                      }
                    })} 
                  />
                  {cardErrors.expiryDate && <p className="text-sm text-red-600">{cardErrors.expiryDate.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cvv">{t("order.payment.cvv")}</Label>
                  <Input 
                    id="cvv" 
                    placeholder="123" 
                    {...registerCard("cvv", { 
                      required: "CVV is required",
                      pattern: {
                        value: /^[0-9]{3,4}$/,
                        message: "Please enter a valid CVV"
                      }
                    })} 
                  />
                  {cardErrors.cvv && <p className="text-sm text-red-600">{cardErrors.cvv.message}</p>}
                </div>
              </div>
              
              <Alert className="bg-blue-50">
                <p className="text-sm font-medium">
                  {t("order.cart.total")}: <span className="font-bold">{totalPrice} RON</span>
                </p>
              </Alert>
              
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsPaymentOpen(false)}>
                  {t("order.payment.cancel")}
                </Button>
                <Button 
                  type="submit" 
                  className="bg-green-600 hover:bg-green-700"
                  disabled={isPaymentProcessing}
                >
                  {isPaymentProcessing ? (
                    <div className="flex items-center">
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      {t("order.payment.processing")}
                    </div>
                  ) : (
                    t("order.payment.pay")
                  )}
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
