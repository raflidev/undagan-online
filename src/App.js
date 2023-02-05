import home from "./assets/images/home.jpg"
import bca from "./assets/images/bca.png"

function App() {
  return (
    <div>
      <div className="flex justify-center font-wondar">
        <div className="w-full lg:w-2/6 bg-slate-200 h-screen bg-cover bg-center text-white" style={{backgroundImage: `url(${home})` }}>
          <div className="text-center text-xl pt-10">
            <div>
              We are getting married
            </div>
            <div className="font-amsterdam text-5xl mt-5">Pony & Hendi</div>
            <div className="absolute bottom-20 w-full lg:w-2/6">
              <div className="grid grid-cols-4 px-7">
                <div className="w-full border border-white py-3">
                  <div>0</div>
                  <div>Days</div>
                </div>
                <div className="w-full border border-white py-3">
                  <div>0</div>
                  <div>Days</div>
                </div>
                <div className="w-full border border-white py-3">
                  <div>0</div>
                  <div>Days</div>
                </div>
                <div className="w-full border border-white py-3">
                  <div>0</div>
                  <div>Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center font-wondar">
        <div className="w-full lg:w-2/6 h-screen bg-slate-800 text-white px-10 pt-10 text-center space-y-10">
          <div>
            <div className="text-4xl underline font-semibold">Akad Nikah</div>
            <div className="grid grid-cols-1 text-2xl mt-7">
              <div>Minggu</div>
              <div className="text-3xl">19</div>
              <div>Februari 2023</div>
              <div>
                Jam: 10:00 WIB - Selesai
              </div>
              <div>Lokasi di</div>
              <div>
                Jl. Bakti VI RT 001 RW 08 No. 30, Kelurahan Gaga, Kecamatan Larangan
              </div>
            </div>
          </div>

          <div>
            <div className="text-4xl underline font-semibold">Resepsi Nikah</div>
            <div className="grid grid-cols-1 text-2xl mt-7">
              <div>Minggu</div>
              <div className="text-3xl">19</div>
              <div>Februari 2023</div>
              <div>
                Jam: 11:00 WIB - Selesai
              </div>
              <div>Lokasi di</div>
              <div>
                Jl. Bakti VI RT 001 RW 08 No. 30, Kelurahan Gaga, Kecamatan Larangan
              </div>
              <a href='https://goo.gl/maps/nT3UVpquQAj258cUA' target="_blank" className="border border-white py-3 px-4 rounded hover:border-black hover:bg-white hover:text-black font-bold mt-10">
                Open maps
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center font-wondar">
        <div className="w-full lg:w-2/6 h-screen bg-slate-200 text-black px-10 pt-10 text-center space-y-10">
          <div className="text-3xl">WEDDING <span className="font-amsterdam">Gift</span> </div>
          <div className="italic tracking-wide text-xl">
            Kehadiran dan doa Anda akan menjadi hadiah pernikahan terbesar yang pernah kami minta. Tidak ada hadiah lain yang dibutuhkan atau diharapkan. Namun, jika memberi adalah tanda cinta, kita senang menerimanya dan tentunya akan semakin melengkapi kebahagiaan kita.
          </div>
          <div className="grid grid-cols-1 gap-4 text-xl">
            <div className="flex bg-slate-800 text-white justify-between px-4 items-center py-4 rounded">
              <div>
                <img src={bca} className="w-24" alt="" srcset="" />
              </div>
              <div className="text-left">
                <div>A.n. Pony Ayu Winarny</div>
                <div>2721772260</div>
              </div>
              <div className="w-1/6 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="italic tracking-wide text-xl">
            Anda juga dapat mengirim hadiah ke alamat ini :
          </div>
          <div className="flex bg-slate-800 text-white text-xl justify-between px-6 space-x-5 items-center py-4 rounded">
              <div className="text-left">
                Jl. Bakti VI RT 001 RW 08 No. 30, Kelurahan Gaga, Kecamatan Larangan
              </div>
              <div className="w-1/6 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
