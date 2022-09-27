const UcapanForm = () => {
  return (
    <div id="ucapan" className="">
      <form className="shadow-xl p-4 rounded-xl border-[1px] border-gray-me">
        <div className="control-group">
          <label htmlFor="name">Nama</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="tulis nama anda disini..."
          />
        </div>
        <div className="control-group">
          <label htmlFor="kehadiran">Kehadiran</label>
          <select name="kehadiran" id="kehadiran" required>
            <option value="hadir">Hadir</option>
            <option value="absent">Tidak hadir</option>
          </select>
        </div>
        <div className="control-group relative">
          <label htmlFor="ucapan">Ucapan</label>
          <textarea
            name="ucapan"
            id="ucapan"
            cols="30"
            rows="5"
            required
            placeholder="tulis ucapan disini..."
          />
          <h5 className="absolute -bottom-10 right-0">0/200</h5>
        </div>
        <div className="w-full flex justify-end mt-16">
          <button className="button bg-dark-green text-white-me">kirim</button>
        </div>
      </form>
    </div>
  );
};

export default UcapanForm;
