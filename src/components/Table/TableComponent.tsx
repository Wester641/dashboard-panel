import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./TableComponent.module.scss";

type Product = {
  name: string;
  price: number;
  discount: number;
  stock: number;
  sold: number;
};

const products: Product[] = [
  { name: "iPhone 15 Pro", price: 1200, discount: 10, stock: 15, sold: 58 },
  { name: "Samsung Galaxy S23", price: 900, discount: 5, stock: 25, sold: 40 },
  { name: "MacBook Air M3", price: 1500, discount: 15, stock: 10, sold: 20 },
  {
    name: "Xiaomi Redmi Note 13",
    price: 300,
    discount: 8,
    stock: 50,
    sold: 70,
  },
  { name: "iPad 10th Gen", price: 500, discount: 12, stock: 30, sold: 33 },

  { name: "Lenovo IdeaPad 3", price: 650, discount: 10, stock: 20, sold: 18 },
  {
    name: "Samsung Galaxy Tab S9",
    price: 800,
    discount: 7,
    stock: 12,
    sold: 22,
  },
  { name: "Nothing Phone 2", price: 700, discount: 6, stock: 18, sold: 27 },
  {
    name: "Asus ROG Zephyrus G14",
    price: 1800,
    discount: 20,
    stock: 8,
    sold: 12,
  },
];

export default function TableComponent() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="product table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Price ($)</TableCell>
            <TableCell align="right">Discount (%)</TableCell>
            <TableCell align="right">In Stock</TableCell>
            <TableCell align="right">Sold</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              className={styles.tableRow}
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">${row.price}</TableCell>
              <TableCell align="right">{row.discount}%</TableCell>
              <TableCell align="right">{row.stock}</TableCell>
              <TableCell align="right">{row.sold}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
