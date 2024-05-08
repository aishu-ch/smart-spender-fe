import SummaryChart from "../Charts/SummaryChart";
import UserSummaryStats from "../Statistics/UserSummary";
import SummaryTabs from "../Tabs/SummaryTabs";

export default function UserSummary() {
  return (
    <div className="statistics-container">
      <SummaryTabs />
      <SummaryChart />
      <UserSummaryStats />
    </div>
  );
}