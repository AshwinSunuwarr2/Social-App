import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SigninValidation } from "@/lib/validation"
import Loader from "@/components/shared/Loader"
import { Link, useNavigate } from "react-router-dom"
import { useSigninAccount } from "@/lib/react-query/queriesAndMutations"
import { useUserContext } from "@/context/AuthContext"


const SigninForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const {checkAuthUser, isLoading: isUserLoading} = useUserContext();


  const {mutateAsync: signInAccount} = useSigninAccount();

  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof SigninValidation>) {    

    const session = await signInAccount({
      email: values.email,
      password: values.password,
    })

    if(!session) {
      return toast({
        title: "Sign in failed.",
        description: "Something went wrong, Please try again.",
        variant: "destructive",
        // action: <Link to="/sign-in">Sign In</Link>,
      })
    }

    const isLoggedIn = await checkAuthUser();

    if(!isLoggedIn) {
      form.reset()
      console.log("logining")

      navigate("/");

    } else{
      toast({
        title: "Sign up failed.",
        description: "Something went wrong, Please try again.",
        variant: "destructive",
        // action: <Link to="/sign-in">Sign In</Link>,
      })
    }

  }

  return (
      <Form {...form}>
        <div className="sm:w-420 flex-center flex-col">
          <img src="public/assets/images/logo.svg" alt="logo" width={200} />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">Log in to your account.</h2>
          
        
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
      
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
            
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" className="shad-input" {...field} />
              </FormControl>
            
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
        <Button type="submit" className="shad-button_primary">{isUserLoading?<div className="flex-center gap-2">
          <Loader/>Loading...
        </div>:"Sign In"}</Button>

        <p className="text-center">Don't have an account? <Link to="/sign-up" className="text-primary text-primary-500">Sign Up</Link></p>
      </form>
      </div>
    </Form>

  )
}

export default SigninForm