import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'sonner'

function Form({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [btnText, setBtnText] = useState('Yuborish')
  const modalRef = useRef()

  const BOT_TOKEN = '7500676241:AAFw7_cLrYecHTqMHNeAhmjAZVIKiOyAADI'
  const CHAT_ID = ''
  const SHEET_URL =
    'https://script.google.com/macros/s/AKfycbyxKEdwdsFulTJIzGYVp3de5g7UNO5QoumE8CRGvRC4NjZLiTVPugaZmmczJVBWFyDptA/exec'

  const sendMessage = async (e) => {
    e.preventDefault()

    if (phone.length !== 9) {
      toast.error("Telefon raqami to'liq emas!")
      return
    }

    setBtnText('Yuborilmoqda...')

    const formattedPhone = `+998${phone}`
    const text = `👤 Ism: ${name}\n📞 Tel: ${formattedPhone}`

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text }),
      })

      fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name,
          phone: formattedPhone,
        }),
      })

      toast.success('Muvaffaqiyatli yuborildi!')
      setBtnText('Yuborildi')
      setName('')
      setPhone('')

      setTimeout(() => {
        openTelegramLink()
        onClose()
      }, 1000)

      setTimeout(() => {
        setBtnText('Yuborish')
      }, 1500)
    } catch (err) {
      toast.error('Xatolik yuz berdi!')
      setBtnText('Yuborish')
    }
  }

  const openTelegramLink = () => {
    const link = document.createElement('a')
    link.href = 'https://t.me/+-obMKv_Z7H03MDNi'
    link.target = '_blank'
    link.rel = 'noopener noreferrer'

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ) {
      link.target = '_self'
    }

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={handleOverlayClick}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[4px] flex items-center justify-center px-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={modalRef}
            className="bg-[#ffffff] max-w-[450px] w-full rounded-lg shadow-lg p-6 relative"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-3 text-2xl lg:text-3xl font-bold text-gray-400 hover:text-gray-800"
            >
              ×
            </button>

            <h2 className="text-xl lg:text-3xl font-rubik text-gray-800 mb-2">Ro'yxatdan o'tish</h2>

            <form onSubmit={sendMessage} className="space-y-3">
              <label htmlFor="name">
                <span className="block font-rubik text-xl text-gray-600 mb-1">Ism</span>
                <input
                  type="text"
                  placeholder="Ismingizni kiriting"
                  className="w-full border border-gray-300 p-2 placeholder:font-rubik rounded-xl outline-0 bg-gray-100"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="off"
                />
              </label>

              <label>
                <span className="block font-rubik text-xl text-gray-600 mb-2 mt-6">
                  Telefon raqami
                </span>
                <div className="flex items-center gap-2 w-full border border-gray-300 p-2 bg-gray-100 rounded-xl focus:border-[#ED1616]">
                  <span className="text-md placeholder:font-rubik">+998</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="\d*"
                    maxLength={9}
                    placeholder=""
                    className="border-none w-full focus:outline-none placeholder:font-rubik"
                    value={phone}
                    autoComplete="off"
                    onChange={(e) => {
                      const onlyNums = e.target.value.replace(/\D/g, '')
                      setPhone(onlyNums)
                    }}
                    required
                  />
                </div>
              </label>

              <button
                type="submit"
                disabled={btnText === 'Yuborilmoqda...'}
                className={`relative text-xl font-rubik overflow-hidden w-full text-white py-2 lg:py-3 mt-5 lg:mt-7 rounded-full transition duration-300
                  ${
                    btnText === 'Yuborilmoqda...'
                      ? 'bg-blue-700 animate-pulse'
                      : btnText === 'Yuborildi'
                      ? 'bg-green-600'
                      : 'cursor-pointer bg-gradient-to-t from-[#520078] to-[#9500b7] hover:from-[#9500b7] hover:to-[#520078] duration-500'
                  }`}
              >
                <span className="relative z-10">{btnText}</span>
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Form
