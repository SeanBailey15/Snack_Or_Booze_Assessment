import { redirect } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import "./AddForm.css";

function AddForm() {
  return (
    <div>
      <Form className="form">
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
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default AddForm;
