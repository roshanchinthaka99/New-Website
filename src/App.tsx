import { motion } from "motion/react";
import { 
  Search, 
  Upload, 
  ArrowRight, 
  Download, 
  Heart, 
  Recycle, 
  Palette, 
  ShoppingBag, 
  Layers, 
  MapPin, 
  Leaf, 
  Zap,
  Globe,
  Share2,
  AtSign,
  Smartphone,
  Play
} from "lucide-react";

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6XDvYv7VB9D7uiO1vKwoCcYDxZ3r6XsHPw49AT6syptoJe-5HhAages8L9a5dIQSWR2-kxmcGk0fLQvWZr9kVDAYjFytoXFMf4TTR8YiAWHfd2yxPb4hW4XqhjDuU1x8lPWQXzPYntX8Bv6zbcJjB71UgzL9u22UQCYhFjI04EDI_2spbNRxLWOQHIBMhj4aBVRtCowswltDYVCsCtdsu_6MT2w6qc2q8Oi8gEZI52JPMq12utgTqvNSZm-1JfzJ5aL8NwgPXkeWd",
  wallpaper1: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzzwnuwEEWuqWthp-TW3dvOeFonvtGaMBibwPlhgZqRJLa0pZqbUGX_Ob9b5i--F6n_RBTSm0N1mjpvsIyqhrK3r6y4QU610k5lFfYXGOyuSPf3cjDLz5ClMTGzCu91pnq-G1uqBlreqRyEwZ3zvEfDbcBIsKVaKwo-d8ElNFLXO7hB2ZRksNYoZHUROWWeByiPzuipGBetAeXBkq2KhwdGF86KdR1_a8o5lyKZtwbTG5jDOfEu37SN1TIZ3R7EA7SkYI2iPgy7Nqa",
  wallpaper2: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXnQrGR_clDlRlO_DtXr4eMpQIumnajrBG827R0AVTVvK6oZo8HmhIjRBy5AAH0ElJMbN642FtzuBvzjgpb5zgOz6iUWVK6IVlX55EZrQUJmZWVYIY4c8L48b1cGAhUhbLRv8sQ_HvV64WAHWNAVJzUm1HcoDFwu9QbstXwmswwWcItMUYRMAgtcVy9MjjuB_zcQsZegMsRUy-OC7xRPhBZg7JQIHSoC6Q60HL3u8mrnGEPZf3mULiTGeCBjbhD4EWfJxYlhFMrdj_",
  wallpaper3: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmpiociAB48a-bkb_LYegRj6ahTn149WhCECtyACSCZHDYz2KmTGDMaMHeGFupQvXSw4pSJz2gsqGGV9F43zBymA5_8ojZd7anYJhBZI8kDzhsUYbL2mu45ems9JdR2UBt4izHUHvaHerAQ9BChaBjXIpDrRAyXaAc-u9eOWxzvRD0nCBoY2e-S1g69VLSAVdzusYxTFBaXT2z1RhC9Y1OB9ilBv5_P8P4Y-zWU-st1k35enuBNUHMtvv4xYEMfLkvyOgDSkgKrIff",
  creator1: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjoTFD_nJ9e3e5vCZ_Qsrt6BvTUOATEh1xTBepLTpzhsSWJyFrITPJLzDlnOaeVw8-KHX01c8MiTzQGIDdwmOooRGvBOGDCjUR-zuNI0XSg7W9JvsQFFh7tD8HxT8WbDKsvEf9Q5EuGzHFCNk59EbhAuxR9uI5DzTOdhOPLgmbfqARhtk5Hh4Ud_XMmEooSjBWspri8IB0Rf8d_TJdtuphO-aNVQYaywHMd7y9lHFB02LWg1KMEyLYLZV1v1LY7X-5hP4zEML5Ysm3",
  creator2: "https://lh3.googleusercontent.com/aida-public/AB6AXuALZAKu-Ba-dSTjUSO3Njvlph5DnSyiuQ7lWtFSFLfgnrQEm2Gkb3ffdvNx_zHYU9ccGNJ1y-N-PUR_VF8sqlPETdCiZURxD0DWWTawL347eTR6Xx4KpDuR-3FYPZH5nZF9EQfx4myC-CO2VOzUSHiIm94gsoK7O7E3ygyd8YTxtNynDJ9cWoCpMULz03RAysvmVQqml7rZjNXhCB1aSg6up7RxgqjdCAGjbrY0QeHebEtpVlCEGJJNMRi_icxAIHvB9Puk8dD6MHBg",
  creator3: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjNGcPdkiRmtFBNtcJwOkjvY38oNFrui3ielDt334-E-TmZdMroZ2v9EmAHJK7cBg74l_GA6kOU1hd7vTaTxtj8LtGH9WtHIbs9l9NRUSnzVgrGiMYrVvi1lrO1-UzifMVyhvmbKh0yh4ssud23forRk4JEpN5tEKKNAsBMT-1GLpjpSwGLJVDJomwcnxEzwbn4XOSroibX6d34nSzjOgKipD_O1XH0kGkMrjickQazdQ40OMIVcUTniPRc-XeHaXey92Mbuiczsyw",
  work1: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf5lOW_nhtGNFSQuJNmITp0ew_0nYhVsm4rOdsOUsH6S2ZaCMyudzsecXdyLaMZ4xEWT7wNeZfOlPQQB36sgm8nl0J1-ZqMD487NSLulPy6IqshZPrziOof9pxysRrnMdw0__hmFQOzKvLMXj0oS8XlH85OJ749AGyHkzqiYuSMeCdnnrQzcx2MA5xD3FVsapfvE7q-FEIGPHM4p62gsuaIr_mRxdTP0gNyZtSAgb4v00iq67NqbO9mVLbxTmaHXcvnbqXeCEUE3nW",
  work2: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4cHFAMkF-_EHSnG7dyoGcNAE7xfvj107w_1YGQNg3i4Jo2HKmyd7dHlvz7QlYkwc6bM2O6DH41ndt1yAqv_nZfTKqyotGvYGyL09cy2r0Msn5hzh_JJGSfc6JBX0_UNBtSmw4mGpbU9vDPHbg6LAxgbdY8NmORt0l73_DvTj23zxrGgroK3IpLOotWjxsDQDPRxH-S3FgkYYa57F3DToBpDpk4Gm51Jslcbcn1AoyQlD4ShYqZbi0LkxwScqSUMCz3gXps7sEC6JP",
  work3: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzXBlHrUz4NDqRFpC3IqRvWD2t6JfjFLnjQQHKf8P4yZAf6TMWR8pEcm3W73nQYvZ1sRoeIS6oz1FIddiISfffdXAO6miG0-hi2nHOdK7uduJXesXxFElUjqUG7s2zV3HFN9u4R_BBgAEYYdxiCXc2Pjfjy-tZE6C8uOJasE3BN7kDThi8MirHYS9iSh-GrD00-uupjRhNcnkU69f274n35N2CXasb36XWBMqjItvM2VSEd3FwC20mGnDa0aoIMPwkEnQzj2zwFmRk",
  work4: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4yRX4ckaY9-ZusitDboqgz5qslFfGwMwWeXHbpihhbG4Nor4emF6sCHFZpwrLH18QidV_GpZ3kb5bHGpaYifk31OytCso-nEKeBVsmA2BvUHj5PGrqrhKqhwJq1MqOQ05OQ8LEE-C3D8g0Jk7lPpGfjWAM8qSf67M13swnCenZcK6sD774vkJPw9ok_dklPOFXK0cisDZ2w8GywqQtmbtH1ovrKH5PeuSkxv5Ywv5VemvoNUDZnJHvIP1XOJjDlmKRmZ_vMNGa3Cz",
  work5: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHJa0aNZNDlbd8POISG1D_V9SoPvJsmVaUuFsv28fN3QVCRN9L2Jv188FVHBz7VGW4Gp6fn6p3Elgm9u5_yyNuxiXt3wZG1M_ZvxSehya19wI5HoeTYZtjb4GGTveCz__cmrWyN-YmnTNWVfh2JgNC3GiB7zBp7fKTAWHk8BMEtUWMZUfx9dWG6LaW4PQCeYgYVOEOE1MPIo5fR128pGZ47CmqhTX5dNOo2nEDeJ81uYmL1Z1zc5WF01SlvgHEkC-d2MEInuWdjhKu",
  work6: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrSsGuBbFTxkIU1uFOi5CtlZZ9j62sALS_HXL_Ppl3zM46_lAXkKg7EeAGWHyZZxcWp9Sus2csVyVZbIPhSZRTCd0TR8SjwcuPrdx9uIWK4kIWmjvWtVMrtwf80IVRklmD1tFFgIi1YsDjZj0LaOVJmJZuX1iO0JUsAMznzRqQcWId6vyRj0t4_pAs28XTSswR7pUUnc4l1WYp1sV60EXykJCaeHMnf0-RaOBTI2hHCjCu65yck_Vwkdtl353W3cMhepMm1qLcS-WT",
  work7: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCe-3RvK0DV3_Jl-7MTvv1JkpsLZX2YcKkecICMWYyKw4ijCCwrhuuH2uO2_ZMM9ys8mIZV3bC_E_szPXxNI0EfX5d_69xEgxqv08uCYS679qaLbAS69-Wp6wwxkQ46sMzT4i1AV7eW1D_HmkdHwMd_FQp5NwHwIdid9hFixvGQYPd7IosmiaBuiP6HdsK5RyJyQOK52Ap4Sjly5XOP7Q2eGOddJz4LjLgI6GXLqHMzYJnIqmmljGe19_jZsTBL9D9ZV-6dRRp4w7b",
  work8: "https://lh3.googleusercontent.com/aida-public/AB6AXuARdh3XtYFCRXVgSOtKhSndCXvZ80m_qmOH0E8s-n4PAHWSXYwBRR8TDnkmId65C5d-nKmoIoIsUcbxVAWwaTsn1Rut1ZBXJCIGH5jtNyWYpBp2hoACZ-tkdCHsY3OZDlYy7RiGdqBp4KTdgkX_pmOW4tZ9I5jnoxez5f66L_PvIGI4SUj-X3LZHTt9QWpNdteMvhZVSahbURZrZ7FK-PlMMwtFMEOuxSK-P0w2CkvHjUjAujqwjQuvfW9n4CKJrxYG9I6sKpPTuoNh",
  work9: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLUdxGvtHXSrr_g9azIe9llfHsfFi2dCkAcAht6DPmXFtHPWN0un5Uth0wZqqUg8vXghJAnQHqSx7Lg1OJxfxjUOB_WGHxcNJHenRzhyE7BnYHN8Puec3DaQhOlVcygC86Nqc_NYtCi2dvTraODmNwM-qdg-xWYxbjxse14CyanOUYy-Qt_Or0Ilsti4atFE6_XBchRlU6_P8aDIHwYPyPX0Dq-Zy8MhE0-yD16Ga-dEyUy-Tca3tCAvq8Ti21K8mBASrfAFuFE7Ze",
};

export default function App() {
  return (
    <div className="min-h-screen">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-white/40 shadow-sm">
        <nav className="flex justify-between items-center px-6 md:px-16 py-6 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-12">
            <span className="font-display text-2xl font-extrabold text-primary tracking-tight">Garbage Images</span>
            <div className="hidden lg:flex gap-8">
              <a className="text-primary font-bold border-b-2 border-primary pb-1" href="#">Home</a>
              <a className="text-on-surface-variant hover:text-primary transition-all duration-300 font-semibold" href="#">Trending</a>
              <a className="text-on-surface-variant hover:text-primary transition-all duration-300 font-semibold" href="#">Wallpapers</a>
              <a className="text-on-surface-variant hover:text-primary transition-all duration-300 font-semibold" href="#">Collections</a>
              <a className="text-on-surface-variant hover:text-primary transition-all duration-300 font-semibold" href="#">Community</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
              <input 
                className="pl-10 pr-4 py-2 rounded-full border border-secondary/20 bg-surface-container-low focus:ring-2 focus:ring-primary-container outline-none w-64 text-sm" 
                placeholder="Search eco-art..." 
                type="text" 
              />
            </div>
            <button className="bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-container px-6 py-2 rounded-full font-bold hover:scale-105 duration-200 ease-in-out btn-neon-glow flex items-center gap-2">
              <Upload className="w-4 h-4" /> Upload
            </button>
            <button className="text-primary font-bold hover:opacity-80 transition-opacity hidden sm:block">Sign In</button>
          </div>
        </nav>
      </header>

      <main className="pt-[88px]">
        {/* Hero Section */}
        <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden px-6 md:px-16">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Waste Art Hero" 
              className="w-full h-full object-cover scale-105 blur-[2px] brightness-95" 
              src={IMAGES.hero} 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background"></div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 glass-card p-8 md:p-16 rounded-3xl max-w-4xl text-center shadow-2xl border border-white/60"
          >
            <h1 className="font-display text-5xl md:text-7xl mb-6 bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent font-extrabold tracking-tighter leading-tight">
              Turn Waste Into Art
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed">
              The world's premier collection of Eco-Modern aesthetic imagery. High-fidelity textures, iridescent waste, and the beauty of digital sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-container px-10 py-4 rounded-full font-bold text-lg btn-neon-glow flex items-center justify-center gap-2 transition-all">
                <Search className="w-5 h-5" /> Explore Gallery
              </button>
              <button className="glass-card px-10 py-4 rounded-full font-bold text-lg text-primary border border-primary/20 hover:bg-white/40 transition-all">
                Join Community
              </button>
            </div>
          </motion.div>
        </section>

        {/* Trending Wallpapers */}
        <section className="py-20 px-6 md:px-16 max-w-[1440px] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs font-bold text-secondary tracking-widest uppercase mb-2 block">CURATED SELECTION</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Trending Wallpapers</h2>
            </div>
            <a className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all group" href="#">
              View all wallpapers <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: IMAGES.wallpaper1, title: "Iridescent Shards", creator: "@eco_visionary" },
              { img: IMAGES.wallpaper2, title: "Fiber Optic Waste", creator: "@cyber_junk" },
              { img: IMAGES.wallpaper3, title: "Neon Artifacts", creator: "@waste_wizard" }
            ].map((wp, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="relative group rounded-3xl overflow-hidden shadow-lg aspect-[4/5] bg-surface-container"
              >
                <img 
                  alt={wp.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src={wp.img} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="flex justify-between items-center text-white">
                    <div>
                      <p className="font-bold text-xl">{wp.title}</p>
                      <p className="text-sm opacity-80">By {wp.creator}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-all">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-all">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="py-24 bg-surface-container-low">
          <div className="px-6 md:px-16 max-w-[1440px] mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 tracking-tight">Browse by Aesthetic</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Recycle, label: "Recycling" },
                { icon: Palette, label: "Trash Art" },
                { icon: ShoppingBag, label: "Garbage Bags" },
                { icon: Layers, label: "Worm Textures" },
                { icon: MapPin, label: "Urban Waste" },
                { icon: Leaf, label: "Eco Wallpapers" },
                { icon: Zap, label: "Neon Trash" }
              ].map((cat, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="glass-card px-8 py-5 rounded-2xl font-bold text-primary flex items-center gap-3 hover:border-primary/40 shadow-sm transition-all bg-white/80" 
                  href="#"
                >
                  <cat.icon className="w-5 h-5 text-primary" /> {cat.label}
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Creator Community */}
        <section className="py-24 px-6 md:px-16 max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Meet the Visionaries</h2>
            <p className="text-on-surface-variant mt-4 text-lg">Curators defining the new aesthetic of digital sustainability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { 
                name: "Aria Green", 
                contribs: "3.2k", 
                avatar: IMAGES.creator1, 
                works: [IMAGES.work1, IMAGES.work2, IMAGES.work3] 
              },
              { 
                name: "Neon Nomad", 
                contribs: "1.8k", 
                avatar: IMAGES.creator2, 
                works: [IMAGES.work4, IMAGES.work5, IMAGES.work6] 
              },
              { 
                name: "Silica Soul", 
                contribs: "5.4k", 
                avatar: IMAGES.creator3, 
                works: [IMAGES.work7, IMAGES.work8, IMAGES.work9] 
              }
            ].map((creator, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group hover:border-primary transition-all shadow-xl"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md">
                  <img alt={creator.name} className="w-full h-full object-cover" src={creator.avatar} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-1">{creator.name}</h3>
                <p className="text-secondary font-semibold mb-6">{creator.contribs} Contributions</p>
                <div className="flex gap-3 mb-8">
                  {creator.works.map((wk, j) => (
                    <div key={j} className="w-20 h-20 rounded-xl overflow-hidden shadow-sm">
                      <img alt="Work" className="w-full h-full object-cover hover:scale-110 transition-transform" src={wk} />
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 rounded-full border border-outline hover:bg-primary-container hover:text-on-primary-container hover:border-transparent transition-all font-bold text-sm uppercase tracking-wide">
                  Follow Creator
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mobile App Promo */}
        <section className="py-24 px-6 md:px-16 container mx-auto">
          <div className="bg-gradient-to-br from-primary-container/30 to-secondary-container/30 rounded-[3rem] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
            <div className="flex-1 z-10 text-center lg:text-left">
              <span className="text-xs font-bold text-primary tracking-widest uppercase mb-4 block">TAKE IT WITH YOU</span>
              <h2 className="font-display text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">Art in your pocket.</h2>
              <p className="text-lg md:text-xl text-on-surface-variant mb-12 max-w-md leading-relaxed">
                Download the Garbage Images app to browse curated galleries, get daily wallpaper updates, and join the global recycling art community.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button className="bg-on-surface text-white px-8 py-4 rounded-2xl flex items-center gap-4 hover:scale-105 transition-transform shadow-lg group">
                  <Smartphone className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                  <div className="text-left">
                    <p className="text-[10px] opacity-70 uppercase font-bold tracking-wider">Download on the</p>
                    <p className="font-bold text-lg leading-none">App Store</p>
                  </div>
                </button>
                <button className="bg-on-surface text-white px-8 py-4 rounded-2xl flex items-center gap-4 hover:scale-105 transition-transform shadow-lg group">
                  <Play className="w-8 h-8 fill-current group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <p className="text-[10px] opacity-70 uppercase font-bold tracking-wider">Get it on</p>
                    <p className="font-bold text-lg leading-none">Google Play</p>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex-1 relative flex justify-center">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-72 h-[550px] bg-white rounded-[3rem] border-[12px] border-on-surface overflow-hidden shadow-2xl relative z-20"
              >
                <img alt="Mobile Preview" className="w-full h-full object-cover" src={IMAGES.wallpaper1} />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-bold text-lg">Wallpaper of the day</p>
                  <p className="text-white/80 text-sm italic">Iridescent Shards</p>
                </div>
              </motion.div>
              <div className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-1/2 w-80 h-[480px] bg-white/20 backdrop-blur-3xl rounded-[3rem] border border-white/40 z-10 hidden md:block"></div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low border-t border-outline-variant w-full py-24 px-6 md:px-16 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[1440px] mx-auto">
          <div className="lg:col-span-1">
            <span className="font-display text-2xl font-extrabold text-primary mb-6 block tracking-tight">Garbage Images</span>
            <p className="text-on-surface-variant font-medium leading-loose mb-8">
              Redefining digital beauty through the lens of modern sustainability and high-tech art.
            </p>
            <div className="flex gap-4">
              {[Globe, Share2, AtSign].map((Icon, i) => (
                <a key={i} className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1" href="#">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-on-surface-variant font-medium">
              <li><a className="hover:text-primary transition-all hover:pl-2" href="#">About</a></li>
              <li><a className="hover:text-primary transition-all hover:pl-2" href="#">Careers</a></li>
              <li><a className="hover:text-primary transition-all hover:pl-2" href="#">Sustainability</a></li>
              <li><a className="hover:text-primary transition-all hover:pl-2" href="#">Press Kit</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-4 text-on-surface-variant font-medium">
              <li><a className="hover:text-primary transition-all hover:pl-2" href="#">API Documentation</a></li>
              <li><a className="hover:text-primary transition-all hover:pl-2" href="#">Help Center</a></li>
              <li><a className="hover:text-primary transition-all hover:pl-2" href="#">Licensing</a></li>
              <li><a className="hover:text-primary transition-all hover:pl-2" href="#">Guidelines</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-on-surface-variant font-medium">
              <li><a className="hover:text-primary transition-all hover:pl-2" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-all hover:pl-2" href="#">Terms of Service</a></li>
              <li><a className="hover:text-primary transition-all hover:pl-2" href="#">Cookie Settings</a></li>
              <li><a className="hover:text-primary transition-all hover:pl-2" href="#">Copyright Info</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-[1440px] mx-auto mt-20 pt-10 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-on-surface-variant font-medium">© 2024 Garbage Images. All rights reserved.</p>
          <div className="flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full">
            <Leaf className="w-5 h-5 text-primary fill-current" />
            <span className="text-primary font-extrabold text-sm tracking-wide uppercase">100% Carbon Neutral Platform</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
