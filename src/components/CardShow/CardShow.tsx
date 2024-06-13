import { StarRounded } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import { Show } from "@/types/Shows";

import { Cover, Description } from "./CardShow.styles";

function CardShow(show: Show) {
  const { image, name, rating, summary } = show;

  return (
    <Card elevation={5}>
      <CardActionArea>
        <Cover component="img" image={image?.original} />

        <CardContent>
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography fontSize="1.5rem" component="h3" fontWeight="bold">
              {name}
            </Typography>

            <Box height="100px">
              <Description variant="body2">
                {summary?.replace(/<[^>]*>?/gm, "")}
              </Description>
            </Box>
          </Box>
        </CardContent>

        <CardActions>
          <StarRounded />

          <Typography variant="h6" component="p" fontWeight="bold">
            {rating.average ?? "N/A"}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

export default CardShow;
