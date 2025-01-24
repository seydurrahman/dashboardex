import React from "react";
import {
  Input,
  Textarea,
  Button,
  Card,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Select,
  Option,
} from "@material-tailwind/react";

const Subcategory = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null); // State to track the selected row
  const TABLE_HEAD = ["Subcategory Name", "Category", "Date", "Actions"];
  const TABLE_ROWS = [
    {
      name: "John Michael",
      job: "Manager",
      date: "23/04/18",
    },
    {
      name: "Alexa Liras",
      job: "Developer",
      date: "23/04/18",
    },
    {
      name: "Laurent Perrier",
      job: "Executive",
      date: "19/09/17",
    },
    {
      name: "Michael Levi",
      job: "Developer",
      date: "24/12/08",
    },
    {
      name: "Richard Gran",
      job: "Manager",
      date: "04/10/21",
    },
  ];

  const handleOpen = () => setOpen(!open);

  const handleEdit = (row) => {
    setSelectedRow(row); // Set the selected row data
    setOpen(true); // Open the dialog
  };

  return (
    <div className="flex flex-col gap-y-10">
      <Input size="md" label="Subcategory Name" color="black" />
      <Select color="purple" label="Select Category">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
      <Button
        variant="filled"
        color="green"
        loading={false}
        className="w-[10%]"
      >
        Create
      </Button>
      <Card className="h-full w-full overflow-y-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map((row, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={row.name}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {row.name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {row.job}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {row.date}
                    </Typography>
                  </td>
                  <td className="{classes}">
                    <div className="flex items-center gap-x-3 justify-center">
                      <Button color="red">Delete</Button>
                      <Button
                        color="green"
                        onClick={() => handleEdit(row)} // Pass the selected row to the handler
                      >
                        Edit
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogBody className="flex flex-col gap-y-5">
          <Input
            size="md"
            label="Name"
            value={selectedRow?.name || ""}
            onChange={(e) =>
              setSelectedRow({ ...selectedRow, name: e.target.value })
            }
          />

          <Input
            size="md"
            label="Date"
            value={selectedRow?.date || ""}
            onChange={(e) =>
              setSelectedRow({ ...selectedRow, date: e.target.value })
            }
          />
          <Select color="purple" label="Select Category">
            <Option>Material Tailwind HTML</Option>
            <Option>Material Tailwind React</Option>
            <Option>Material Tailwind Vue</Option>
            <Option>Material Tailwind Angular</Option>
            <Option>Material Tailwind Svelte</Option>
          </Select>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-2"
          >
            Cancel
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => {
              // Save changes logic can be implemented here
              handleOpen();
            }}
          >
            Save
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default Subcategory;
