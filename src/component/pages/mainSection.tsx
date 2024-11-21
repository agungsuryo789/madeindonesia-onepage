import Carousel from "@component/ui/carousel";
import Card from "@component/ui/card/card";
import CardImage from "@component/ui/card/cardImage";
import CardSubtitle from "@component/ui/card/cardSubtitle";
import CardTitle from "@component/ui/card/cardTitle";
import CardBody from "@component/ui/card/cardBody";

import imagehome1 from "@assets/image home 1.png";
import imagehome2 from '@assets/image home 2.png'
import imagehome3 from '@assets/image home 3.png'
import imagehome4 from '@assets/image home 4.png'

const MainSection = () => {
  return (
    <section className="my-8 p-4 min-h-screen">
      <div className="grid lg:grid-cols-4 grid-rows-4">
        <h3 className="lg:col-span-2 row-span-2 my-4 lg:my-0 font-medium text-6xl">
          Upgrade Your Model.
        </h3>
        <p className="lg:col-span-2 row-span-2 my-4 lg:my-0 text-lg text-slate-400">
          {`Enhance your model with pre-designed add-ons like the Base
              Deck and the Base Deck+. Additional items are also available
              through key partnerships.`}
        </p>
      </div>

      <Carousel>
        <Card>
          <CardImage src={imagehome1} />
          <CardSubtitle>Pandeyan, Yogyakarta</CardSubtitle>
          <CardTitle>BASE 1</CardTitle>
          <CardBody>
            <div className="grid grid-cols-6">
              <div className="col-span-3">
                <p className="font-semibold text-lg">2 Bedrooms</p>
                <p className="text-base text-gray-500">
                  Pre-launch: Prices TBA
                </p>
              </div>
              <div className="col-span-3 text-gray-400 text-wrap text-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore maiores dolorum dolores iusto ullam deserunt
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardImage src={imagehome2} />
          <CardSubtitle>Ngaglik, Yogyakarta</CardSubtitle>
          <CardTitle>BASE 2</CardTitle>
          <CardBody>
            <div className="grid grid-cols-6">
              <div className="col-span-3">
                <p className="font-semibold text-lg">2 Bedrooms</p>
                <p className="text-base text-gray-500">
                  Pre-launch: Prices TBA
                </p>
              </div>
              <div className="col-span-3 text-gray-400 text-wrap text-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore maiores dolorum dolores iusto ullam deserunt
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardImage src={imagehome3} />
          <CardSubtitle>Ngemplak, Yogyakarta</CardSubtitle>
          <CardTitle>BASE 3</CardTitle>
          <CardBody>
            <div className="grid grid-cols-6">
              <div className="col-span-3">
                <p className="font-semibold text-lg">2 Bedrooms</p>
                <p className="text-base text-gray-500">
                  Pre-launch: Prices TBA
                </p>
              </div>
              <div className="col-span-3 text-gray-400 text-wrap text-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore maiores dolorum dolores iusto ullam deserunt
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardImage src={imagehome4} />
          <CardSubtitle>Tegal Sari, Yogyakarta</CardSubtitle>
          <CardTitle>BASE 4</CardTitle>
          <CardBody>
            <div className="grid grid-cols-6">
              <div className="col-span-3">
                <p className="font-semibold text-lg">2 Bedrooms</p>
                <p className="text-base text-gray-500">
                  Pre-launch: Prices TBA
                </p>
              </div>
              <div className="col-span-3 text-gray-400 text-wrap text-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore maiores dolorum dolores iusto ullam deserunt
              </div>
            </div>
          </CardBody>
        </Card>
      </Carousel>
    </section>
  );
};

export default MainSection;
