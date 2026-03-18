export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">PonGift Mall</h1>
          <p className="text-center text-blue-100 mt-1">프리미엄 기프트몰</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to PonGift Mall</h2>
          <p className="text-xl text-blue-100 mb-8">최고의 기프트카드를 만나보세요</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
            쇼핑하기
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">카테고리</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="text-4xl mb-2">🎁</div>
              <p className="font-medium text-gray-700">기프트카드</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="text-4xl mb-2">🍽️</div>
              <p className="font-medium text-gray-700">외식권</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="text-4xl mb-2">🎬</div>
              <p className="font-medium text-gray-700">문화생활</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="text-4xl mb-2">🏨</div>
              <p className="font-medium text-gray-700">여행/호텔</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 PonGift Mall. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
