import UcapanItem from "./UcapanItem";

const UcapanGroup = () => {
  return (
    <div id="ucapan2" className="lg:h-[500px] lg:overflow-y-scroll">
      <h2 className="text-center mb-6 lg:hidden flex flex-col">
        <span className="heading-1">Ucapan</span>
        <span>Terimakasih atas ucapan yang diberikan</span>
      </h2>
      <div className="flex flex-col items-center gap-6">
        <UcapanItem />
        <UcapanItem />
        <UcapanItem />
        <UcapanItem />
        <UcapanItem />
        <UcapanItem />
        <UcapanItem />
        <UcapanItem />
        <UcapanItem />
      </div>
    </div>
  );
};

export default UcapanGroup;
