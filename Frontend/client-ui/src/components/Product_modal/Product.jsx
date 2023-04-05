import React,{useEffect} from "react";
import csm from "../../assets/csm.jpg";
import bleach from '../../assets/Shunsui Kyoraku.png'
import HorizontalScroll from "../New_Arrivals/Arrivals";
import StarRating from "../New_Arrivals/StarRating";
import "./p-style.css";
const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="Product-conatiner">
      <div className="product-image-p">
        <div className="p-image">
          <img src={bleach} alt="image" className="pp-img" />
        </div>
        <div className="p-p">
          <div className="p-title">
            <div className="p-t-heading">Bleach Box Set 1</div>
            <div className="t-p-sub">(Paperback) | Released: 01 Sep 2008</div>
          </div>
          <div className="p-subtitle">
            By: Tite (ILT) Kubo (Author) , Tite Kubo (Author)
          </div>
          <div className="p-subtitle">
            | Publisher: Viz Media, Subs. of Shogakukan Inc
          </div>
          <div className="p-reviews">
            <StarRating initialRating={4} />| Write a Review
          </div>
          <div className="p-price">
            ₹9,441
            <div className="Mrp">₹14,525</div>
          </div>
          <div className="p-shipping-detail">
            International Edition{" "}
            <div className="p-s-d-d">
              Ships within 16-18 Business Days{" "}
              <div className="">
                Free Shipping in India and low cost Worldwide.
              </div>
            </div>
          </div>
          <div className="p-buttons-set">
            <div className="p-buynow">
              <button className="p-btn-bn">Buy Now</button>
            </div>
            <div className="p-Addtocart">
              <button className="p-btn-atc">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-details">
        <div className="p-d-heading">About the Book</div>
        <div className="p-d-p">
          <p>
            Part-time student, full-time Soul Reaper, Ichigo is one of the
            chosen few guardians of the afterlife. Ichigo Kurosaki never asked
            for the ability to see ghosts--he was born with the gift. When his
            family is attacked by a Hollow--a malevolent lost soul--Ichigo
            becomes a Soul Reaper, dedicating his life to protecting the
            innocent and helping the tortured spirits themselves find peace.
            Find out why Tite Kubo's Bleach has become an international manga
            smash-hit! The first Bleach story arc is now available in a box set
            for the first time! The custom box set includes the beginning 21
            volumes of Bleach, a double-sided poster and a special Bleach
            collector's booklet. About the Author: Bleach is author Tite Kubo's
            second title. Kubo made his debut with ZOMBIEPOWDER., a four-volume
            series for Weekly Shonen Jump. To date, Bleach has been translated
            into numerous languages and has also inspired an animated TV series
            that began airing in Japan in 2004. Beginning its serialization in
            2001, Bleach is still a mainstay in the pages of Weekly Shonen Jump.
            In 2005, Bleach was awarded the prestigious Shogakukan Manga Award
            in the shonen (boys) category
          </p>
        </div>
      </div>
      <div className="similar">
        <HorizontalScroll heading={"Similar Products"} id={1}/>
      </div>
      <div className="comments"></div>
    </div>
  );
};

export default Product;
