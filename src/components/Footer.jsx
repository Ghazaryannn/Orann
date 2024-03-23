import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
  <div className={styles.footer_left}>
    <p className={styles.about}>
      <span> About the company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
      ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
    </p>
    <div className={styles.icons}>
      <a href="#"><i class="fa fa-facebook"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-linkedin"></i></a>
      <a href="#"><i class="fa fa-google-plus"></i></a>
      <a href="#"><i class="fa fa-instagram"></i></a>
    </div>
  </div>
  <div className={styles.footer_center}>
    <div>
      <i class="fa fa-map-marker"></i>
      <p><span> Street name and number</span> City, Country</p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <p> (+00) 0000 000 000</p>
    </div>
    <div>
      <i class="fa fa-envelope"></i>
      <p><a href="#"> office@company.com</a></p>
    </div>
  </div>
  <div className={styles.footer_right}>
    <h2> Company<span> logo</span></h2>
    <p class="menu">
      <a href="#"> Home</a> |
      <a href="#"> About</a> |
      <a href="#"> Services</a> |
      <a href="#"> Portfolio</a> |
      <a href="#"> News</a> |
      <a href="#"> Contact</a>
    </p>
    <p className={styles.name}> Company Name &copy; 2016</p>
  </div>
</footer>
  )
}

export default Footer