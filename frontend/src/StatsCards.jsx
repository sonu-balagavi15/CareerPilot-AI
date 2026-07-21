import "./App.css";

function StatsCards() {
  const stats = [
    {
      icon: "📄",
      number: "95%",
      title: "ATS Accuracy",
      color: "blue",
    },
    {
      icon: "💼",
      number: "1200+",
      title: "Jobs Available",
      color: "purple",
    },
    {
      icon: "🎯",
      number: "250+",
      title: "Interview Questions",
      color: "green",
    },
    {
      icon: "🤖",
      number: "24×7",
      title: "AI Support",
      color: "orange",
    },
  ];

  return (
    <div className="stats-grid">
      {stats.map((item, index) => (
        <div className={`stats-card ${item.color}`} key={index}>
          <div className="stats-icon">{item.icon}</div>

          <h2>{item.number}</h2>

          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;