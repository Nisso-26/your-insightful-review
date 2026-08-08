export interface NumberedStep {
  title: string;
  desc: string;
}

const NumberedSteps = ({ items }: { items: NumberedStep[] }) => (
  <div className="max-w-[620px] border-t border-primary/15">
    {items.map((item, i) => (
      <div key={item.title} className="flex gap-6 border-b border-primary/15 py-7">
        <span className="font-display text-lg text-accent">
          {String(i + 1).padStart(2, "0")}
        </span>
        <div>
          <h3 className="font-body text-sm font-semibold uppercase tracking-[1.5px] text-primary">
            {item.title}
          </h3>
          <p className="mt-2 font-body text-[15px] leading-[1.8] text-muted-foreground">
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default NumberedSteps;
