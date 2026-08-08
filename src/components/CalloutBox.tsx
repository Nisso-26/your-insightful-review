const CalloutBox = ({ title, text }: { title: string; text: string }) => (
  <div className="max-w-[620px] border-l-2 border-accent bg-muted p-8 lg:p-10">
    <h3 className="font-display text-2xl leading-snug text-primary">{title}</h3>
    <p className="mt-4 font-body text-[15px] leading-[1.9] text-muted-foreground">{text}</p>
  </div>
);

export default CalloutBox;
