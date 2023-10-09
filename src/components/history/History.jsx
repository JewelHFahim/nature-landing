const History = () => {
  return (
    <div className="mt-20 w-full font-Poppins pl-[27px] pr-[86px]">
      <h1 className="text-[40px] font font-semibold my-5 border-b-2 border-blue-600 pb-2">
        History
      </h1>

      <section className="mt-16 flex flex-col gap-6">
        {[1, 2, 3, 4].map((item, i) => (
          <div
            key={i}
            className="w-full h-[80px] rounded-[20px] bg-white flex justify-between items-center px-10"
          >
            <div className="flex gap-4">
              <div className="w-[55px] h-[55px] rounded-full bg-red-200"></div>
              <p className="text-black">
                Change Task Filed Name “
                <span className="text-blue-600">Task Manger</span>” and assign “
                <span className="text-blue-600">Shohanur Rahaman</span>“
              </p>
            </div>

            <div>
              <p className="text-blue-600 text-center text-[18px]">
                12/10/23 <br /> 13:20
              </p>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
};

export default History;
