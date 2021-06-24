import React from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import PageLayout from "../PageLayout/PageLayout";
import "normalize.css";

export default function Layout({ children }) {
  return (
    <div style={{ margin: `0`, fontFamily: "sans-serif" }}>
      <Navbar />
      <PageLayout>
        {children}
      </PageLayout>
      <Footer />
    </div >
  )
}