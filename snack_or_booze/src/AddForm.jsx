import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import SnackOrBoozeApi from "./Api";
import "./AddForm.css";

function AddForm({ setSnacks, setNumSnacks, setDrinks, setNumDrinks }) {
  const navigate = useNavigate();

  const INITIAL_STATE = {
    path: "",
    id: "",
    name: "",
    description: "",
    recipe: "",
    serve: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  function processFormData(e) {
    e.preventDefault();
    const { target } = e;
    let data = {
      path: "/" + target.selectCategory.value.toLowerCase(),
      id: target.itemName.value.replace(RegExp(/([' '])+/g), "-").toLowerCase(),
      name: target.itemName.value,
      description: target.itemDescription.value,
      recipe: target.itemRecipe.value,
      serve: target.servingInstructions.value,
    };

    console.log(data);

    setFormData(data);

    return formData;
  }

  async function addItem(e) {
    const data = processFormData(e);
    const res = await SnackOrBoozeApi.postItem(data);
    console.log(res);

    if (res) {
      if (data.path === "/snacks") {
        let items = await SnackOrBoozeApi.getSnacks();
        setNumSnacks(items.length);
        setSnacks(items);
      } else if (data.path === "/drinks") {
        let items = await SnackOrBoozeApi.getDrinks();
        setNumDrinks(items.length);
        setDrinks(items);
      }
      navigate(data.path);
    }
  }

  return (
    <div>
      <Form className="form" onSubmit={(e) => addItem(e)}>
        <FormGroup>
          <Label for="selectCategory">
            Select A Category To Add An Item To
          </Label>
          <Input id="selectCategory" name="select" type="select">
            <option>Snacks</option>
            <option>Drinks</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="itemName">Item Name</Label>
          <Input
            id="itemName"
            name="name"
            placeholder="Item Name"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="itemDescription">Item Description</Label>
          <Input
            id="itemDescription"
            name="description"
            placeholder="Description"
            type="textarea"
          />
        </FormGroup>
        <FormGroup>
          <Label for="itemRecipe">Item Recipe</Label>
          <Input
            id="itemRecipe"
            name="recipe"
            placeholder="Recipe"
            type="textarea"
          />
        </FormGroup>
        <FormGroup>
          <Label for="servingInstructions">Serving Instructions</Label>
          <Input
            id="servingInstructions"
            name="serve"
            placeholder="Serving Instructions"
            type="textarea"
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default AddForm;
