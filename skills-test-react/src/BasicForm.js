import React from 'react';

import { Formik, Field, Form } from 'formik';

import { useSelector, useDispatch } from 'react-redux';
import { addValue, removeValue } from './features/todoTableSlice';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const BasicForm = () => {

  const td_table = useSelector((state) => state.todoTable.todos)
  const [textValue, setTextValue] = React.useState('');
  const dispatch = useDispatch();

  const handle_textbox_change = (event) => {
    setTextValue(event.target.value);
  }

  const submitHandler = () => {
    if(textValue)
    dispatch(addValue(textValue))
    setTextValue('');
  }

  return (
    <div>
      <h1>TODO</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(values) => { }}
      >
        <Form>
          <label htmlFor="todo">Add ToDo </label>
          <Field id="todo" name="Add ToDo" placeholder="TextHere" onChange={handle_textbox_change}  />
          <button type="submit" onClick={submitHandler}>Submit</button>
        </Form>
      </Formik>

      <h2>TODO LIST: </h2>
      <div>
        {td_table.map(val => {
          return (<h3>{val}</h3>)
        })}
      </div>
      <TableContainer>
        <Table dense table>
          <TableHead>
            <TableRow>
              <TableCell>Todo Item</TableCell>
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {td_table.map(val => {
              return (<TableRow>
                <TableCell>
                  <label>
                    {val}
                  </label>
                </TableCell>
                <TableCell>
                  <label onClick={() => dispatch(removeValue({val}))}>X</label>
                </TableCell>
              </TableRow>)
            }
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>)
};

export default BasicForm
