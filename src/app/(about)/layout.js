import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
  "20+ Projects Completed",
  "3+ Years of Freelancing",
  "99% Client Satisfaction",
  "20K+ Subscribers",
  "Authored In-Depth Course on Educative",
  "Contributed as a Technical Course Reviewer 📝",
  "Recipient of the Hackernoon Noonies Award 🏆",
  "News:",
  "LucAsh || Black Friday",
  "10 Essential Web Development Tools For Productivity",
  "Best Practices For Web Accessibility: Building Inclusive Websites",
  "Web Accessibility: Inclusive Design For All Users",
  "Unveiling The Musical Magic: ToPaKlaSs || On The Rise!",
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
