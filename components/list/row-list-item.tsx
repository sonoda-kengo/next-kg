import { Grid, ListItem } from '@mui/material';

interface IRowListItem {
  itemKey: string;
  itemValue: string;
}

export const RowListItem = ({ itemKey, itemValue }: IRowListItem) => {
  return (
    <ListItem>
      <Grid container>
        <Grid item xs={4}>
          {itemKey}
        </Grid>
        <Grid item xs={8}>
          {itemValue}
        </Grid>
      </Grid>
    </ListItem>
  );
};
