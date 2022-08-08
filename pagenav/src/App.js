import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <>
      <div className="body">
        <h3>Welcome to Tamil Classic Films!</h3>
        <a href="#about">About</a> <br></br>
        <a href="#products">products</a>
        <br></br>
        <a href="#history">Checkout</a>
        <h1 id="about">About</h1>
        <p>
          We are the internet's premier desination for the classic film boff
        </p>
        <h4>Featured Films</h4>
        <p>
          Each week,we feature a classic flim and have an accompanying movie
          screeing and Blu-ray special.This week is "A Streetcar Named Desire"
        </p>
        <a href="#Buy movies Tickets"> Buy Movie Tickets</a>
        <a href="#Buy movies Tickets">&nbsp; &nbsp; Purchase Blu Ray</a>
        <br></br>
        <img src="https://static.toiimg.com/photo/88771535.cms" alt="movie1" />
        <h1 id="products">products</h1>
        <img
          src="https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-1z5104391/portrait/1920x770edfef3e6ecde497db1368b6808cff9d0.jpg"
          alt="movie2"
        />
        <img
          src="https://qqcdnpictest.mxplay.com/pic/a3dc0e2dac7f01cda5aa2cc523b9a516/en/2x3/320x480/test_pic1637310888090.webp"
          alt="movie3"
        />
        <img
          src="https://images004-a.erosnow.com/movie/5/1004915/img145210/6893377/1004915_6893377.jpg"
          alt="movie4"
        />
        <img
          src="https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-maragadhanaanayam/portrait/1920x770765a3ff52d194b34ac881db831d10684.jpg"
          alt="movie5"
        />
        <p></p>
      </div>
      <h1 id="check">Checkout</h1>
      <p>Your Cart</p>
      <p>casablanca</p>
      <p>
        A tamil classic starring Kaathu vaakula rendu Kadhal.DVD format
        <br />
        $12 <br />
        Singing in the rain
      </p>
      <p>
        A family favourite musical starring .DVD format
        <br />
        $8
        <br />
        family
      </p>
      <p>
        The comical film.DVD format<br></br>$10<br></br>laughing Gauranteed
      </p>
      <p>promo code</p>
      <h3>Total USD($20)</h3>
      <form>
        <input type="text" placeholder="Promo code"></input>
        <button>redeem</button>
        <h3>billing address</h3>
        <label>
          first Name:
          <input type="text" />
        </label>
        <br />
        <br />
        <label>
          Last Name:
          <input type="text" />
        </label>
        <br />
        <br />
        <h4>Username</h4>
        <label>
          @<input type="text" placeholder="username" />
        </label>
        <br />
        <br />
        <label>
          email(optional)
          <input type="text" placeholder="you@example" />
        </label>
        <br />
        <br />
        <label>
          address
          <input type="text" placeholder="123/street" />
        </label>
        <br />
        <br />
        <label>
          address2
          <input type="text" placeholder="apartment" />
        </label>
        <br />
        <br />
        <label>
          Country
          <select>
            <option>India</option>
            <option>USA</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          state
          <select>
            <option>tamilnadu</option>
            <option>kerala</option>
          </select>
        </label>
        <label>
          Zip
          <input type="text" />
        </label>
        <br />
        <br />
        <input type="checkbox" />
        <label> Billing address is same as the sjipping addresss</label>
        <br />
        <br />
        <br />
        <input type="checkbox" />
        <label> save address for next time</label>
        <br />
        <br />
        <br />
        <h3>payment</h3>
        <input type="radio" /> <label>Credit card</label>
        <br />
        <br />
        <input type="radio" /> <label>Debit card</label>
        <br />
        <br />
        <input type="radio" /> <label>Pay pal</label>
        <br />
        <br />
        <label>
          Credit card number
          <input type="text" />
        </label>
        <br />
        <br />
        <label>
          Experiation
          <input type="text" />
        </label>
        <br />
        <br />
        <label>
          CVV
          <input type="text" />
        </label>
        <br />
        <br />
        <button>Continue to checkout</button>
        <br />
        <br />
      </form>
    </>
  );
}
