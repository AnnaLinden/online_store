function About() {
  return (
    <section>
      <h1 className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-tight sm:text-6xl '>
        We love
        <span className='bg-primary py-2 px-4 rounded-lg  tracking-widest text-white'>
          organic food
        </span>
      </h1>

      <p className='mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto'>
        We proudly connect local farmers with our community by offering a wide
        selection of organic grains, fresh vegetables, and other sustainably
        sourced products. Committed to supporting sustainable agriculture, we
        ensure that every item in our store is harvested with care, providing
        you with the highest quality produce straight from the farm to your
        table.
      </p>
    </section>
  );
}
export default About;
