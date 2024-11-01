import { useCoursesContext } from "@/App";
import LayoutWebsite from "@/components/layouts/LayoutWebsite";
import BuyCreditController from "@/pages/buy_credit/BuyCreditController";
import HistoryController from "@/pages/history/HistoryController";
import PaymentHistoryController from "@/pages/payment_history/PaymentHistoryController";
import PricingPlansController from "@/pages/pricing_plans/PricingPlansController";
import PrivacyController from "@/pages/privacy/PrivacyController";
import ProfileController from "@/pages/profile/ProfileController";
import SignInController from "@/pages/signin/SignInController";
import SignUpController from "@/pages/signup/SignUpController";
import TermsController from "@/pages/terms/TermsController";
import VocalizeController from "@/pages/voicalize/VocalizeController";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  const context: any = useCoursesContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutWebsite />}>
          <Route path='' element={<VocalizeController />} />
          <Route path='buy-credits' element={<BuyCreditController />} />
          <Route path='profile' element={<ProfileController />} />
          <Route path='history' element={<HistoryController />} />
          <Route path='privacy' element={<PrivacyController />} />
          <Route path='terms' element={<TermsController />} />
          <Route path='pricing-plans' element={<PricingPlansController />} />
          <Route
            path='payment-history'
            element={<PaymentHistoryController />}
          />
        </Route>
        <Route path='signin' element={<SignInController />} />
        <Route path='signup' element={<SignUpController />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
