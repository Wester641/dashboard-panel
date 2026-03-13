import LinearProgress, {
  type LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1, backgroundColor: "#f5f5f5" }}>
        <LinearProgress variant="determinate" {...props} color="error" />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function LinearWithValueLabel({ value }: { value: number }) {
  const progressValue = value;

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={progressValue} />
    </Box>
  );
}
