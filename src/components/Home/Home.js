// import Landing from '../../assets/landing-bg.png';

const Home = () => {
  return (
    <div className='body-height p-10'>
      <div className='grid grid-cols-1 md:grid-rows-1 md:grid-cols-4 gap-8'>
        <div className="col-span-2 p-10">
          <div className="h-full w-full flex flex-col justify-center items-center rounded-xl">
            <p className="text-6xl font-semibold mr-32">Fabric</p>
            <p className="text-6xl font-semibold">Experimentation</p>
            <p>
              <span className="m-0 ml-24 text-xl font-semibold">and</span>
              <span className="ml-1 text-6xl font-semibold">Learning</span>
            </p>
            <p className="mr-24 text-6xl font-semibold">Environment</p>
          </div>
        </div>
        <div className="col-span-2">
          <p className='text-5xl font-bold'>About FELE</p>
          <p className="text-md text-slate-600 mt-4 leading-8">
            Permissioned blockchain platforms, such as Hyperledger's Fabric, are increasingly used to support consortium applications with semi-trust models between collaborating organizations. They provide many desirable features, such as decentralization, consensus-based governance, immutability, auditability, security and privacy, automation, and fault tolerance. However, blockchain technologies are highly complicated, nuanced, and laborious. Setting up custom-designed Fabric networks, organization structures, channels, and chaincode, as well as the environment interacting with Fabric for specific experimentation are very difficult, tedious, and time-consuming. Moreover, the immutability nature of blockchain further impedes lightweight rapid experimentation, which is especially important in the earlier phases of research for quickly trying out ideas, designs and solutions. This project suggests the design and implementation of Fabric Experimentation and Learning Environment (FELE), which simulates a high-level abstraction of Fabric and its operating environment. FELE can be used to quickly construct custom-designed lightweight testbeds for many kinds of experimentation and learning. It is implemented in CouchDB and Node JS. FELE has been used successfully as a precursor of research on security and privacy, logical data constraints, and model transformation on Fabric.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;