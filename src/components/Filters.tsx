import { Form, useLoaderData, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { ProductsResponseWithParams } from "@/utils";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

function Filters() {
  const { meta, params } = useLoaderData() as ProductsResponseWithParams;
  const { search, company, category, shipping, order, price } = params;
  return (
    <Form className='border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      <div className='mb-2'>
        <Label htmlFor='search'>Search Product</Label>
        <Input id='search' name='search' type='text' defaultValue={search} />
      </div>
      <Button type='submit' size='sm' className='self-end mb-2'>
        search
      </Button>
      <Button
        type='button'
        asChild
        size='sm'
        variant='outline'
        className='self-end mb-2'
      >
        <Link to='/products'>reset</Link>
      </Button>
      <FormInput
        type='search'
        label='search product'
        name='search'
        defaultValue={search}
      />
      <FormSelect
        label='select category'
        name='category'
        options={meta.categories}
        defaultValue={category}
      />
      {/* COMPANIES */}
      <FormSelect
        label='select company'
        name='company'
        options={meta.companies}
        defaultValue={company}
      />
      {/* ORDER */}
      <FormSelect
        label='order by'
        name='order'
        options={["a-z", "z-a", "high", "low"]}
        defaultValue={order}
      />
    </Form>
  );
}
export default Filters;
