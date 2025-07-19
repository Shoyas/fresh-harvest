import { useCountdown } from "@/hooks/useCountdown";

type CountdownTimer = {
    targetDate: Date;
};

export default function Countdown({ targetDate }: CountdownTimer) {
    const { days, hours, minutes, seconds } = useCountdown(targetDate);

    const formatTime = (num: number) => num.toString().padStart(2, "0");

    const timeBlocks = [
        { label: "Days", time: days },
        { label: "Hour", time: hours },
        { label: "Min", time: minutes },
        { label: "Second", time: seconds },
    ];

    return (
        <div className="flex items-center gap-4 font-rubik text-2xl text-color-black">
            {timeBlocks.map(({ label, time }, idx) => (
                <div
                    key={idx}
                    className="flex h-[7.625rem] w-[6.125rem] flex-col items-center justify-center space-y-2 rounded-xl bg-white"
                >
                    <span className="text-[1.75rem] font-normal md:text-[2.5rem]">
                        {formatTime(time)}
                    </span>
                    <small className="text-[1.125rem] text-xs text-gray-600 md:text-sm">
                        {label}
                    </small>
                </div>
            ))}
        </div>
    );
}
