import ForwardedIconComponent from "../../../../../../../components/genericIconComponent";

export default function DownloadButton({
  isHovered,
  handleDownload,
}: {
  isHovered: boolean;
  handleDownload: () => void;
}): JSX.Element | undefined {
  if (isHovered) {
    return (
      <div
        className={`absolute right-1 top-1 rounded-bl-lg bg-muted text-sm font-bold text-foreground `}
      >
        <button className="px-2 py-1 text-ring " onClick={handleDownload}>
          <ForwardedIconComponent
            name="DownloadCloud"
            className="h-5 w-5 text-current hover:scale-110"
          />
        </button>
      </div>
    );
  }
  return undefined;
}
