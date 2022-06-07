import React, {useEffect} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUser} from "./Redux/StateSlices/User/userSlice";
import {auth, createUserDoc} from "./Firebase/Firebase-config";
import {onSnapshot} from "firebase/firestore";

import Layout from "./Components/Layout/Layouts/Layout";
import Header from "./Components/Sections/C-Header/Header";
import Footer from "./Components/Sections/C-Footer/Footer";
import Home from "./Pages/Pg-Home/Home";
import Shop from "./Pages/Pg-Shop/Shop";
import Sign from "./Pages/Pg-Sign/Sign";
import Checkout from "./Pages/Pg-Checkout/Checkout";
import Product from "./Pages/Pg-Product/Product";
import FAQ from "./Pages/Pg-FAQ/FAQ";
import About from "./Pages/Pg-About/About";
import Returns from "./Pages/Pg-Returns/Returns";
import Shipping from "./Pages/Pg-Shipping/Shipping";
import TermsAndCondition from "./Pages/Pg-TermsAndCondition/TermsAndCondition";
import OrderingForCompanies from "./Pages/Pg-OrderingForCompanies/OrderingForCompanies";
import User from "./Pages/Pg-User/User";
import DesignProcess from "./Pages/Pg-DesignProcess/DesignProcess";
import LegalNotice from "./Pages/Pg-LegalNotice/LegalNotice";
import "./App.scss";

const App = () => {
  const {currentUser} = useSelector((state) => state.user);
  const Dispatch = useDispatch();
  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDoc(userAuth);
        onSnapshot(userRef, (snapshot) => {
          // console.log(snapshot.data());
          Dispatch(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });
      } else {
        Dispatch(setCurrentUser(userAuth));
      }
    });
    // returned function will be called on component unmount
    return () => unsubscribeFromAuth();
  }, [Dispatch]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/user"
          element={
            !currentUser ? <Navigate to={`/`} replace={true} /> : <User />
          }
        />
        <Route
          path="/sign-in"
          element={
            !currentUser ? <Sign /> : <Navigate to={`/`} replace={true} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/design-process" element={<DesignProcess />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
        <Route
          path="/ordering-for-companies"
          element={<OrderingForCompanies />}
        />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
