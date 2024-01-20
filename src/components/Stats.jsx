import { stats } from '../constants'
import styles from '../style'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {
        stats.map(stat => (
          <div key={stat.id} className={`font-poppins ${styles.flexCenter} flex-1 m-3`}>
            <h4 className='font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]'>
              {stat.value}
            </h4>
            <p className='xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>
              {stat.title}
            </p>
          </div>
        ))
      }
    </section>
  )
}

export default Stats