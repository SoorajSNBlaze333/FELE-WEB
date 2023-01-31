import Landing from '../../assets/landing-new-bg.png';

const Home = () => {
  return (
    <div className='body-height p-10'>
      <div className='grid grid-cols-1 md:grid-rows-1 md:grid-cols-4 gap-4'>
        <img className='col-span-2 h-[95%] w-[95%]' src={Landing} alt="Blockchain Network" />
        <div className="col-span-2">
          <p className='text-5xl font-bold'>Fabric Experimentation and Learning Environment</p>
          <p className="text-md text-slate-600 mt-4 leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin fermentum leo vel orci porta non pulvinar neque. Nunc consequat interdum varius sit amet mattis vulputate enim. Sit amet facilisis magna etiam. Eget mauris pharetra et ultrices neque ornare aenean. Nisi vitae suscipit tellus mauris. Eros donec ac odio tempor. Tempor orci dapibus ultrices in iaculis. Nec feugiat nisl pretium fusce id velit ut tortor. Malesuada fames ac turpis egestas maecenas pharetra convallis. Nibh mauris cursus mattis molestie a iaculis. Et malesuada fames ac turpis egestas integer. Euismod nisi porta lorem mollis aliquam ut. Sit amet nisl suscipit adipiscing bibendum. Malesuada proin libero nunc consequat interdum varius sit. Sed viverra tellus in hac habitasse platea dictumst.

          Sit amet est placerat in egestas erat. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Mauris commodo quis imperdiet massa tincidunt nunc. Ut etiam sit amet nisl purus in mollis nunc sed. Duis at consectetur lorem donec massa sapien faucibus et molestie. Dignissim cras tincidunt lobortis feugiat vivamus at. Varius vel pharetra vel turpis nunc eget. Fames ac turpis egestas sed tempus urna et. Laoreet suspendisse interdum consectetur libero. Et netus et malesuada fames ac turpis egestas integer. Adipiscing tristique risus nec feugiat in. Orci eu lobortis elementum nibh tellus molestie.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;