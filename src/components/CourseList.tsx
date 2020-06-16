import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import {
  withStyles, WithStyles
} from '@material-ui/core/styles';

import Course from '../types/Course';

interface CourseListItemProps extends Partial<Course>, WithStyles {}

function CourseListItemBase({ classes, title }: CourseListItemProps) {
  return (
    <Grid item sm={12} md={4} lg={3} className={classes.container}>
      <Card className={classes.card}>
        <CardActionArea className={classes.cardActionArea}>
          <CardMedia
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

interface CourseListProps {
  children: React.ReactNode;
}

interface CourseListProps extends WithStyles {}

function CourseListBase({ children, classes, ...props }: CourseListProps) {
  return <Grid className={classes.container} container spacing={2}>{children}</Grid>;
}

export const CourseListItem = withStyles({
  container: {
    display: 'flex',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardActionArea: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
})(CourseListItemBase);

export const CourseList = withStyles(({ spacing }) => ({
  container: {
    margin: spacing(2, 0),
  },
}))(CourseListBase);

export default CourseList;
