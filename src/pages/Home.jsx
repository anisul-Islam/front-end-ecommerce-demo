import React from 'react';
import { Container, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';

import Products from '../components/products/Products';
import SearchInput from '../components/SearchInput';
import PaginationComp from '../components/PaginationComp';
import SortProduct from '../components/SortProduct';
import useProduct from '../hooks/useProduct';
import PageTitle from '../components/PageTitle';

const Home = () => {
  const { pageNumber, setPageNumber, totalPages, setSearchValue } =
    useProduct();

  return (
    <Container>
      <PageTitle title="home" />
      {/* <Typography variant="h4" gutterBottom align="center">
        Products
      </Typography> */}

      {/* Search and Sort Row */}
      <Box sx={{ mb: 4 }}>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <SearchInput
              setSearchValue={setSearchValue}
              label={'Search products...'}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <SortProduct />
          </Grid>
        </Grid>
      </Box>

      {/* Products List */}
      <Products />

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <PaginationComp
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          totalPages={totalPages}
        />
      </Box>
    </Container>
  );
};

export default Home;
