import { useState } from 'react';
import Button from '../components/Button';

export default function Auth() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [name, setName] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send verification code
    alert('کد تأیید به شماره شما ارسال شد');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would register user
    alert('ثبت‌نام با موفقیت انجام شد');
  };

  return (
    <div className="py-12">
      <div className="container-custom max-w-md mx-auto">
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          {/* Tabs */}
          <div className="flex border-b border-neutral-200 mb-6">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-3 font-medium transition-colors ${
                activeTab === 'login'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
            >
              ورود
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`flex-1 py-3 font-medium transition-colors ${
                activeTab === 'signup'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
            >
              ثبت‌نام
            </button>
          </div>

          {/* Login Form */}
          {activeTab === 'login' && (
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-right">
                  شماره موبایل
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="09123456789"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-right">
                  کد تأیید
                </label>
                <input
                  type="text"
                  required
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="کد ۶ رقمی"
                  maxLength={6}
                />
                <button
                  type="button"
                  className="text-sm text-primary-600 mt-2 hover:underline"
                >
                  ارسال مجدد کد
                </button>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                ورود
              </Button>
            </form>
          )}

          {/* Signup Form */}
          {activeTab === 'signup' && (
            <form onSubmit={handleSignup} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-right">
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="نام خود را وارد کنید"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-right">
                  شماره موبایل
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="09123456789"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-right">
                  کد تأیید
                </label>
                <input
                  type="text"
                  required
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="کد ۶ رقمی"
                  maxLength={6}
                />
                <button
                  type="button"
                  className="text-sm text-primary-600 mt-2 hover:underline"
                >
                  ارسال کد تأیید
                </button>
              </div>

              <div className="text-xs text-neutral-500">
                با ثبت‌نام، شما قوانین و مقررات دست‌ساز را می‌پذیرید.
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                ثبت‌نام
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

