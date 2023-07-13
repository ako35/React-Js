import React, { useState } from "react";
import Apples, { Bananas1, Orange } from "./components/01-my-house";
import Jsx1 from "./components/02-jsx/01-jsx";
import Jsx2 from "./components/02-jsx/02-jsx";
import Jsx3 from "./components/02-jsx/03-jsx";
import Jsx4 from "./components/02-jsx/04-jsx";
import InlineStyling from "./components/03-styles/01-inline-styling";
import InternalStyling from "./components/03-styles/02-internal-styling";
import ExternalStyling from "./components/03-styles/03-external-styling";
import ExternalModuleStyling from "./components/03-styles/04-external-module-styling";
import SassScss from "./components/03-styles/05-sass-scss";
import DijitalSaatUygulamasi1 from "./components/04-dijital-saat-uygulamasi1/dijital-saat-uygulamasi1";
import Greetings from "./components/05-props/01-greetings";
import Products from "./components/05-props/05-products";
import DijitalSaatUygulamasi2 from "./components/17-dijital-saat-uygulamasi3/dijital-saat-uygulamasi3";
import Image from "./components/07-images/01-images";
import ImageGallery from "./components/07-images/02-image-gallery";
import ProfileCard from "./components/08-profile-card/profile-card";
import BootstrapKlasikYontem from "./components/09-bootstrap/01-bootstrap-klasik-yontem";
import BootstrapModernYontem from "./components/09-bootstrap/02-bootstrap-modern-yontem";
import ReactIcons from "./components/10-icons/01-react-icons";
import MaterialIcons from "./components/10-icons/02-material-icons";
import Events from "./components/11-events/events";
import ProductShop from "./components/12-product-shop/product-shop";
import'./assets/scss/style.scss';
import State from "./components/13-usestate/01-state";
import Counter1 from "./components/14-counter/counter1";
import Birthday from "./components/15-birthday/birthday";
import UseEffect from "./components/16-useeffect/useeffect";
import { Button } from "react-bootstrap";
import DijitalSaatUygulamasi3 from "./components/17-dijital-saat-uygulamasi3/dijital-saat-uygulamasi3";
import FilterList from "./components/18-filter-list/filter-list";
import UseRef from "./components/19-useRef/useref";
import ClassTurundeComponentler from "./components/20-component-turleri/01-class-turunde-componentler";
import FonksiyonTurundeComponentler from "./components/20-component-turleri/02-fonksiyon-turunde-componentler";
import Fetch from "./components/21-fetch/01-fetch";
import Fetch2 from "./components/21-fetch/02-fetch";
import Countries from "./components/22-axios/countries";
import ParentComponent from "./components/23-lifting-state-up/01-parent-component";
import Form1 from "./components/24-forms/01-form";
import Form2 from "./components/24-forms/02-form";
import Form3 from "./components/24-forms/03-form";
import Form4 from "./components/24-forms/04-form";
import Form5 from "./components/24-forms/05-form";
import FormikYup1 from "./components/25-formik-yup/01-formik-yup";

const profileCardData = {
  name: "Ramazan",
  location: "Istanbul",
  image: "person2.jpg",
  statistics: [
    { title: "Shot", stat: 2 },
    { title: "Follower", stat: 233 },
    { title: "Following", stat: 342 },
  ],
}

const App = () => {

  const [showUseEffect, setShowUseEffect] = useState(false);
  return (
    <div>
      <Apples />
      <Bananas1 />
      <Orange />
      <Jsx1 />
      <Jsx2 />
      <Jsx3 />
      <Jsx4 />
      <InlineStyling />
      <InternalStyling />
      <ExternalStyling />
      <ExternalModuleStyling />
      <SassScss />
      <DijitalSaatUygulamasi1 />
      <Greetings />
      <Products>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
        adipisci necessitatibus facilis saepe ipsa obcaecati sit quidem ullam?
        Harum aperiam aliquid tenetur dolore placeat dolorem molestiae eius
        eaque distinctio numquam.
      </Products>
      <DijitalSaatUygulamasi2 textColor="red" bgColor="yellow" />
      <Image />
      <ImageGallery />
      <ProfileCard
        name="Mehmet"
        location="Istanbul"
        image="profile-card.jpg"
        statistics={[
          { title: "Shot", stat: 2 },
          { title: "Follower", stat: 233 },
          { title: "Following", stat: 342 },
        ]}
      />
      <ProfileCard
        name="Ali"
        location="Izmir"
        image="profile.jpg"
        statistics={[
          { title: "Shot", stat: 2 },
          { title: "Like", stat: 233},
          { title: "Following", stat: 342 }
        ]}
      />
      <ProfileCard {...profileCardData} />
      <BootstrapKlasikYontem />
      <BootstrapModernYontem />
      <ReactIcons />
      <MaterialIcons />
      <Events />
      <ProductShop />
      <State />
      <Counter1 />
      <Birthday />
      <UseEffect />
      <Button onClick={() => setShowUseEffect(prev => !prev)}>
        use Effect Hook unu Gizle
      </Button>
      {showUseEffect && <UseEffect />}
      {showUseEffect && <DijitalSaatUygulamasi3 textColor="red" bgColor="yellow" />}
      <FilterList />
      <UseRef />
      {showUseEffect && <ClassTurundeComponentler />}
      <FonksiyonTurundeComponentler />
      <Fetch />
      <Fetch2 />
      <Countries />
      <ParentComponent />
      <Form1 />
      <Form2 />
      <Form3 />
      <Form4 />
      <Form5 />
      <FormikYup1 />

      <br />
      <br />
      <br />
    </div>
  );
};

export default App;
