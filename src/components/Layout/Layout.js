import React from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 800 }}>
      <Navbar />
        {children}
      <Footer />
    </div>
  )
}