import Card from './components/Card';

function App() {
  return (
    <div>
      <h1>Daftar Produk</h1>
      <Card title="Laptop ASUS" description="Performa tinggi untuk pekerjaan berat." />
      <Card title="Smartwatch Samsung" description="Memantau kesehatan dan aktivitas harian." />
      <Card title="Headset Sony" description="Suara jernih dan nyaman dipakai lama." />
    </div>
  );
}

export default App;
