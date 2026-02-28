export default function Ticker() {
  const tickerItems = [
    '🔧 Tune-Up',
    '🔩 Ganti Komponen',
    '🛞 Ganti Ban',
    '⚙️ Indexing Gear',
    '🩸 Brake Bleed',
    '🧰 Custom Build',
    '🚵 MTB Service',
    '🏎️ Road Bike Setup'
  ];

  return (
    <div className="ticker">
      <div className="ticker-track">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div key={index} className="ticker-item">
            {item}
            {index < tickerItems.length * 2 - 1 && <span className="ticker-sep">·</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
