
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, User, Lock, Eye, EyeOff, AlertCircle, Loader2, Check } from "lucide-react";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Please fill in all fields");
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    if (!agreeTerms) {
      setError("Please agree to the terms and conditions");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // In a real app, this would be an API call to create a user account
      console.log("Registration attempted with:", formData);
      setIsLoading(false);
      
      // For demo purposes, show an error
      setError("This email is already registered. Try logging in instead.");
    }, 1500);
  };

  const getPasswordStrength = () => {
    const { password } = formData;
    if (!password) return 0;
    
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    return strength;
  };

  const passwordStrength = getPasswordStrength();
  
  const getStrengthText = () => {
    switch(passwordStrength) {
      case 0: return "Very weak";
      case 1: return "Weak";
      case 2: return "Fair";
      case 3: return "Good";
      case 4: return "Strong";
      default: return "";
    }
  };
  
  const getStrengthColor = () => {
    switch(passwordStrength) {
      case 0: return "bg-red-500";
      case 1: return "bg-red-500";
      case 2: return "bg-yellow-500";
      case 3: return "bg-green-500";
      case 4: return "bg-green-600";
      default: return "bg-gray-300";
    }
  };

  return (
    <Layout>
      <div className="container max-w-md mx-auto py-16 px-4 animate-fade-in">
        <Card className="border-2">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Create Your Account</CardTitle>
            <CardDescription>
              Join LearnSphere and start your learning journey today
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-3 mb-4 flex items-start">
                <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input 
                    id="name"
                    name="name"
                    type="text" 
                    placeholder="John Doe" 
                    className="pl-10"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input 
                    id="email"
                    name="email"
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="pl-10"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input 
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    className="pl-10 pr-10"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  <button 
                    type="button"
                    className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-muted-foreground">Password Strength</span>
                      <span className="text-xs font-medium">{getStrengthText()}</span>
                    </div>
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getStrengthColor()} transition-all duration-300`} 
                        style={{ width: `${(passwordStrength / 4) * 100}%` }}
                      ></div>
                    </div>
                    <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1">
                      <li className="flex items-center text-xs">
                        <span className={`mr-1 ${formData.password.length >= 8 ? "text-green-500" : "text-muted-foreground"}`}>
                          {formData.password.length >= 8 ? <Check className="h-3.5 w-3.5" /> : "•"}
                        </span>
                        At least 8 characters
                      </li>
                      <li className="flex items-center text-xs">
                        <span className={`mr-1 ${/[A-Z]/.test(formData.password) ? "text-green-500" : "text-muted-foreground"}`}>
                          {/[A-Z]/.test(formData.password) ? <Check className="h-3.5 w-3.5" /> : "•"}
                        </span>
                        Uppercase letter
                      </li>
                      <li className="flex items-center text-xs">
                        <span className={`mr-1 ${/[0-9]/.test(formData.password) ? "text-green-500" : "text-muted-foreground"}`}>
                          {/[0-9]/.test(formData.password) ? <Check className="h-3.5 w-3.5" /> : "•"}
                        </span>
                        Number
                      </li>
                      <li className="flex items-center text-xs">
                        <span className={`mr-1 ${/[^A-Za-z0-9]/.test(formData.password) ? "text-green-500" : "text-muted-foreground"}`}>
                          {/[^A-Za-z0-9]/.test(formData.password) ? <Check className="h-3.5 w-3.5" /> : "•"}
                        </span>
                        Special character
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input 
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    className={`pl-10 pr-10 ${
                      formData.confirmPassword && formData.password !== formData.confirmPassword 
                        ? "border-red-500 focus-visible:ring-red-500" 
                        : ""
                    }`}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                  <button 
                    type="button"
                    className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <p className="text-xs text-red-500 mt-1">Passwords do not match</p>
                )}
              </div>
              
              <div className="flex items-start space-x-2 mt-6">
                <Checkbox id="terms" checked={agreeTerms} onCheckedChange={(checked) => setAgreeTerms(!!checked)} />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link to="/terms" className="text-brand-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-brand-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full hover-scale" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
              
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" type="button" className="hover-scale">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" type="button" className="hover-scale">
                  <svg className="h-5 w-5 mr-2 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.5 3H14.5C17.5376 3 20 5.46243 20 8.5V15.5C20 18.5376 17.5376 21 14.5 21H9.5C6.46243 21 4 18.5376 4 15.5V8.5C4 5.46243 6.46243 3 9.5 3ZM9.5 5C7.567 5 6 6.567 6 8.5V15.5C6 17.433 7.567 19 9.5 19H14.5C16.433 19 18 17.433 18 15.5V8.5C18 6.567 16.433 5 14.5 5H9.5ZM13 8V16H15V8H13ZM9 8V16H11V8H9Z" />
                  </svg>
                  Facebook
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t p-6">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-brand-600 hover:underline font-medium">
                Log in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default SignupPage;
