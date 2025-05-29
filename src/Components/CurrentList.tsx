import React from "react";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DeleteIcon  from "@mui/icons-material/Delete";
import IconButton  from "@mui/material/IconButton";
import "./css/CurrentListCSS.css";


function CurrentList() {

      const [quantityType, setQuantityType] = useState("");
      const [itemName, setItemName] = useState("");
      const [quantity, setQuantity] = useState(0);
      const [nameHelper, setNameHelper] = useState("");
      const [quantityHelper, setQuantityHelper] = useState("");

      const Item ={
        name: itemName,
        quantity: quantity,
        quantityType: quantityType
      }

      const [currentList, setCurrentList] = useState<{ name: string; quantity: number; quantityType: string }[]>([]);

      function deleteItem(index: number) {
        setCurrentList(currentList.filter((_, i) => i !== index));
        } 

      function newItem() {
        if (itemName === "" || quantityType === "" || quantity <= 0) {
            if (itemName === "") {
                setNameHelper("Please enter an item name.");
            } else {
                setNameHelper("");
            }
            if (quantity <= 0) {
                setQuantityHelper("Please enter a valid quantity.");
            } else {
                setQuantityHelper("");
            }
            alert("Please fill out all fields correctly.");
            return;
        }
        console.log(Item);
        setCurrentList([...currentList, Item]);
        console.log([...currentList, Item]);
        setNameHelper("");
        setQuantityHelper("");
      }

      function checkQuantityType() {
        if (quantityType === "Ounce") {
            return "Enter ounces";
        }
        else if (quantityType === "Kilo") {
            return "Enter kilos";
        }
        else if (quantityType === "Pound") {
            return "Enter pounds";
        }
        else if (quantityType === "Liter") {
            return "Enter liters";
        }
        else {
            return "Enter quantity";
        }
    }

    function checkQuantityType2(a: string) {
        if (a === "Ounce") {
            return "ounces of";
        }  
        else if (a === "Kilo") {
            return "kilos of";
        }
        else if (a === "Pound") {
            return "pounds of";
        }
        else if (a === "Liter") {
            return "liters of";
        }
        else if (a === "Unit") {
            return "X";
        }
    }
 
 
 
 
 
return (
    <>
    <div id="title">
      <h2>Current List</h2>
    </div>
    <div id="Form">
        <h2>Add a item</h2>
        <form>
            <div>
            <label htmlFor="item-select">Select an item quantity type:</label>
            <Select value={quantityType} onChange={(e) => setQuantityType(e.target.value)}>
                <MenuItem value="Unit">Individual Units</MenuItem>
                <MenuItem value="Kilo">Kilos</MenuItem>
                <MenuItem value="Pound">Pounds</MenuItem>
                <MenuItem value="Liter">Liters</MenuItem>
                <MenuItem value="Ounce">Ounces</MenuItem>
            </Select>
            </div>
            <div id="resposive-div">
                <div style={{display: "inline"}}>
                    <TextField helperText={nameHelper} label="Item Name" variant="outlined" size="small" onChange={(e) => setItemName(e.target.value)} value={itemName}>
                    </TextField>
                </div>
                <div style={{display: "inline"}}>
                    <TextField  helperText={quantityHelper} inputProps={{ min: 0}} label={checkQuantityType()} variant="outlined" size="small" type="number"  onChange={(e) => setQuantity(Number(e.target.value))} value={quantity}>
                    </TextField>
                </div>    
            </div>
            <div >
                <Button variant="contained" onClick={newItem}>Add Item</Button>
            </div>
                
        </form>
    </div>
    <div id="current-list">
        <Card variant="outlined" sx={{ minWidth: 275, marginTop: 2, padding: 2, maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
        <h2>Current List Items</h2>
            <List>
                {currentList.map((item, index) => (
                    <ListItem key={index}>
                        {item.quantity} {checkQuantityType2(item.quantityType)}  {item.name} <IconButton onClick={() => deleteItem(index)}><DeleteIcon/></IconButton>
                    </ListItem>
                ))}
            </List>
        </Card>
        
    </div>
    </>
  );
}

export default CurrentList;