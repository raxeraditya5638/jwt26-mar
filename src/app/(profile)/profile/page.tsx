"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [data, setData] = useState("nothing");
  const [logout, setlogout] = useState("nothing");
  const router = useRouter();
  const userdetails = async () => {
    try {
      const res = await axios.post("/api/v1/profile");
      // res.id = whole id to send first object
      // if you find user = res.id.id.user
      const Id = res.data.id;
      setData(res.data.id);
      router.push(`/profile/${Id}`);
    } catch (error: any) {
      console.log("some error", error);
    }
  };
  const handlelogout = async () => {
    try {
      const res = await axios.delete("/api/users/logout");
      setlogout(res.data.message);
      console.log("retrun data :");
      console.log("hey data", res.data.message);
      router.push("/users/login");
    } catch (error: any) {
      console.log("some error", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>profile</h1>
      {data === "nothing" ? "" : "hety"}
      <button onClick={userdetails} className="bg-green-500 px-5 py-2 ">
        get data
      </button>
      <h1>{data}</h1>
      <button className="bg-green-500 px-5 py-2 " onClick={handlelogout}>
        click
      </button>
      <h1>{logout}</h1>
      <div className="h">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quis
        maxime quaerat, non ullam illo placeat adipisci rem, officia mollitia
        velit nemo similique. Quod totam aspernatur temporibus? Pariatur, nobis
        veritatis.
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, omnis
          numquam! Expedita ad iusto in dolorum distinctio, nam ratione optio
          dolor laborum molestias quis. Ea obcaecati optio fugiat quis cumque.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorem
          nisi consectetur officiis minima soluta dolores sequi sapiente earum
          perspiciatis? Delectus saepe, asperiores mollitia debitis beatae
          laudantium totam neque consectetur? Harum, eius fugiat! Eius suscipit
          quas consectetur sequi exercitationem reprehenderit ad impedit nostrum
          animi quod minima quos eveniet nobis necessitatibus sit soluta omnis
          beatae eos assumenda similique earum, optio at. Nemo vel, corrupti
          reprehenderit velit fugit amet veniam repudiandae mollitia at
          consectetur tenetur enim et ab. Repellendus, sunt eos excepturi,
          laudantium in, sint eveniet consequatur facilis nulla quae sapiente
          mollitia? Blanditiis odio expedita quod voluptate sit distinctio iusto
          eius tenetur aliquam totam quidem rerum veritatis consequuntur
          deserunt optio, molestiae iste in magni repudiandae non! Temporibus,
          hic! Distinctio saepe reiciendis deleniti. Facere unde expedita hic
          earum qui esse optio reiciendis voluptatum! Officia repellat eligendi
          iste. Iure error et nulla adipisci tempore pariatur aliquid quisquam
          sapiente omnis nam. Animi adipisci eius eveniet! Numquam, expedita eos
          delectus iste nobis quas ipsam suscipit atque veniam veritatis
          officiis quibusdam optio, aliquid necessitatibus fugiat. Voluptas quam
          libero, optio nemo quae eos hic culpa officiis ab ad! Tenetur libero,
          doloremque magnam cumque corrupti aspernatur neque commodi, cupiditate
          doloribus error, eligendi accusamus optio sapiente? Dolor esse, ut
          aperiam recusandae, laudantium omnis voluptates, placeat aliquam quo
          fugiat qui dolores. Ut, eum voluptas iusto veritatis modi natus non
          qui deserunt assumenda laborum aut, labore voluptatum, eveniet
          excepturi repellendus nihil quisquam. Eius perferendis alias vero quia
          itaque a veritatis tenetur facilis. Nostrum saepe autem deleniti
          quidem. Distinctio, vero ea! Velit officiis adipisci necessitatibus,
          voluptatibus quod perferendis ad eaque veritatis dicta neque omnis,
          sunt maiores dolor illum eum illo est doloribus repellat! Dolores
          temporibus recusandae praesentium quibusdam consequuntur libero ex
          debitis consectetur, unde possimus repudiandae ipsam dolorum,
          accusantium ipsum impedit hic corporis veniam, ullam sed eius alias!
          Tenetur aliquam perspiciatis quasi eligendi! Aliquid, nam laudantium
          numquam veritatis enim impedit iure officia tenetur necessitatibus
          error expedita quod ab ipsam hic, veniam quo alias praesentium
          voluptatem perspiciatis omnis debitis. Earum dolorum omnis tempora
          distinctio. At velit odio est quaerat voluptas blanditiis excepturi
          voluptate autem, adipisci totam corrupti ipsum ullam magnam? Tempora
          fugiat, voluptates quas placeat eius nemo repellendus labore
          asperiores expedita quos ullam maiores. Assumenda voluptatem hic fugit
          omnis necessitatibus sed sapiente eius vitae iusto obcaecati velit
          blanditiis eos laborum ea voluptatum magnam nemo, saepe deserunt,
          similique praesentium perspiciatis, quas esse maiores nihil! Amet!
          Quibusdam consequuntur eos rem nesciunt nobis quod quis optio fugiat
          laboriosam ex at corrupti molestias ullam sint delectus voluptates
          voluptas a possimus beatae, similique exercitationem provident,
          incidunt reiciendis. Adipisci, dignissimos? Vitae amet ea repudiandae
          voluptate animi eos sapiente totam, impedit doloremque recusandae
          provident sed, necessitatibus nam sequi sit laboriosam? Quia nisi
          perferendis nesciunt ex illo alias quidem, aliquam tempora fuga.
          Excepturi iste deleniti eos. Quaerat consequuntur praesentium
          voluptatum veritatis quis dolorem minima quisquam repudiandae animi
          sit, aut libero ab iste laboriosam ratione dolor est veniam labore
          quasi quo nemo eum. Ratione dolorum rem neque eos pariatur, temporibus
          natus, veritatis voluptas facilis illo ducimus vero obcaecati maxime,
          provident molestiae. Odio hic nisi magni non quidem dicta impedit
          veritatis in modi corrupti! Repudiandae consequatur id reiciendis
          perspiciatis dicta dolore voluptates delectus. Corrupti dolorum, culpa
          veniam recusandae ratione ipsam eius harum dignissimos ipsum
          repudiandae necessitatibus suscipit vitae ab labore impedit doloribus
          repellat ut. Pariatur fuga a id nesciunt, necessitatibus consectetur
          molestiae inventore nisi saepe omnis vel qui ab facilis laborum esse!
          Tenetur accusantium nesciunt temporibus ducimus odio consequuntur
          animi mollitia dolorem distinctio illum. Molestiae deleniti dolorum
          animi quos quisquam iste. Accusantium laboriosam suscipit consequatur
          deleniti? Architecto minus laudantium sed quam odit a ad molestiae
          inventore voluptatem labore veniam unde, sapiente magnam, quis
          deserunt. Possimus, dolore quidem voluptatum, placeat dolor illum
          sapiente repudiandae deleniti accusamus ex quae non exercitationem
          minus? Perferendis accusamus alias est qui libero, illum amet, fuga
          error consequatur nemo quo magnam. Nisi corrupti ipsa provident iure
          cum asperiores dolores consequuntur obcaecati alias ratione molestias,
          qui odit placeat perspiciatis dolorum architecto aliquam nesciunt
          minus earum iste excepturi quod autem possimus? Mollitia, voluptates.
          Earum repellat ipsa, atque doloribus fuga architecto cumque odio
          excepturi nam autem. Adipisci quos, dicta rerum voluptatum quae
          debitis itaque iusto optio asperiores! Et iste velit iure natus
          voluptates quae. Ipsa laboriosam quisquam, beatae omnis quis optio
          numquam aliquam recusandae minima quaerat labore voluptatem illum enim
          reprehenderit repudiandae reiciendis deserunt veritatis iure alias
          iste quo architecto exercitationem. Officia, dolore corporis.
          Dignissimos beatae molestiae in incidunt. Dolore doloribus sapiente
          reprehenderit reiciendis inventore ab quos explicabo! Odio modi veniam
          voluptatum similique ex quos voluptates autem rerum. Perferendis quae
          eius ab ratione perspiciatis. At quo maxime voluptates vero quibusdam!
          Quidem eius in, optio porro soluta, saepe animi esse pariatur quis
          nesciunt voluptatum eum natus officiis obcaecati sed libero vero qui
          deleniti veritatis commodi. Cupiditate voluptates illum aut facere
          quia officia tempore. Rem dolorem excepturi magni, voluptas voluptatem
          necessitatibus quo animi quos illum tempora iste harum, ad inventore
          saepe aspernatur eos, quidem reprehenderit porro. Sequi numquam eum
          placeat aliquam odit quis sapiente, expedita, ipsum architecto neque
          reiciendis officiis omnis, rerum consequatur? Velit repellat sit,
          nesciunt repellendus fuga dicta, ullam assumenda excepturi,
          consequuntur repudiandae magni. Sit voluptate aspernatur molestias
          consectetur perferendis est, laborum consequatur excepturi nulla
          eligendi atque corrupti dolorum tempore nesciunt tenetur reiciendis
          vitae laudantium at aliquam hic, debitis quas architecto ullam dolor.
          Sint. Libero harum unde error, veritatis iste aut labore doloribus
          numquam inventore sint commodi voluptas quo pariatur beatae itaque
          consectetur quae doloremque ipsa totam delectus sit quasi. Cum,
          explicabo. Ea, repudiandae? Rem dolorum sed molestiae id, qui
          necessitatibus eos quaerat nesciunt numquam expedita, deserunt nulla
          officia quisquam ab animi. Officia quo rerum provident! Consectetur
          natus eveniet illum ex temporibus, animi consequatur! Illo voluptate
          eum minus facilis quos voluptatum voluptas harum pariatur repellat
          sed? Sunt, minus voluptatibus praesentium vel animi obcaecati dicta
          adipisci iure porro corrupti enim ullam laborum laboriosam. Iste, at?
          Iure, incidunt, alias modi quam at debitis magni corrupti ex velit
          maiores architecto. Esse sit distinctio dolor corrupti reprehenderit
          nobis, debitis id repellendus quam repudiandae ex, perferendis, rerum
          illo ab. Labore, id quod sapiente voluptas laboriosam ipsam adipisci
          ex, quam eius officiis inventore! Veniam minima, similique esse
          voluptatum nihil ullam quod id odit ipsum iste at exercitationem culpa
          aperiam accusantium? Sequi ratione maiores sapiente commodi,
          accusantium corrupti facilis et quibusdam amet perferendis, incidunt
          unde asperiores sed voluptas, quia qui obcaecati ipsa! Esse accusamus
          velit veniam eum incidunt, cupiditate nisi dolorum. Nihil facilis
          aliquam sunt cumque modi libero assumenda delectus ipsam eaque
          provident sit, excepturi quaerat magnam officiis veniam eum fuga
          eveniet dolorem, dolor illum vero adipisci, incidunt sequi. Culpa,
          quisquam? Laboriosam quibusdam, quis natus doloribus ipsa pariatur
          ratione molestias reiciendis, dignissimos earum reprehenderit quisquam
          praesentium fugit dicta impedit adipisci rem odit itaque, nulla culpa
          quod corrupti voluptatem! Debitis, architecto sed. Commodi natus in
          debitis sapiente! Inventore quod fugit doloribus itaque est ea
          aspernatur recusandae aliquam quae, mollitia esse dolorem illum
          officia sapiente atque, harum animi enim totam quas iure et!
          Laudantium, impedit voluptates neque quas officiis a ad accusamus
          vitae, earum beatae culpa porro minus fugiat animi exercitationem
          veritatis aliquam dolorem. Sed eos perferendis vitae! Similique ipsa
          nostrum officia esse! Cumque totam, ipsa tempora id maiores blanditiis
          aliquam soluta minus repellendus assumenda sequi aliquid voluptatem
          exercitationem perspiciatis delectus nobis necessitatibus quod dicta!
          Esse repudiandae aspernatur nisi iusto similique aperiam molestiae?
          Veritatis dignissimos et, aliquid doloremque voluptatum voluptate
          nulla dolore mollitia beatae illo recusandae quidem eaque dolorum
          minima nam, quia totam dicta culpa atque? Maiores enim, sit minus est
          vero fuga! Perspiciatis exercitationem ducimus dolorum tempore.
          Quisquam laudantium culpa ut corporis dolorem, blanditiis sapiente
          quasi quos iusto at explicabo dignissimos modi. Aperiam quidem id eum
          illum sapiente consequatur error iste fugiat. Recusandae rerum, ex est
          nisi, ipsam modi minima repudiandae quibusdam quod incidunt quo neque
          veritatis nam, nostrum voluptatem tempora? Commodi nam consequuntur
          accusantium quod magni ab dolores similique hic! Voluptas! Sed
          corrupti officia ab tenetur. Impedit illum voluptatibus magni sit
          provident quod consequatur! Provident, repudiandae reiciendis est
          nobis ad ex omnis, natus corporis laboriosam non obcaecati ullam
          adipisci nihil distinctio! Ipsa cumque praesentium placeat repellat
          magnam, recusandae necessitatibus laboriosam, laborum ratione rem
          quibusdam accusamus eius voluptate dignissimos, sapiente itaque
          eligendi! Ab velit beatae consequuntur labore veritatis vero, facere
          enim! Illo! Harum esse optio, alias inventore illum temporibus quidem,
          neque voluptatem expedita in quo dolor reprehenderit iure beatae
          nesciunt laudantium non consequuntur error. Sequi atque consequuntur
          quia aut, voluptatem minus veniam. Tempore nemo dolore, dolorem
          voluptatem at blanditiis, ex rem hic expedita consectetur, incidunt
          fugiat similique placeat quod consequuntur molestias iusto.
          Necessitatibus saepe non, dolore mollitia dolores ea voluptatum? Vel,
          ipsum. Dignissimos, quo quod accusamus accusantium ipsum quam deserunt
          autem dolor, rerum tempore laudantium nobis veniam et tenetur placeat
          inventore exercitationem tempora minus, error impedit consectetur
          quasi? Est repudiandae perferendis numquam. Laborum esse iste rem,
          dolorem autem deserunt cumque cupiditate distinctio, labore id sit quo
          porro quos voluptatem optio temporibus provident accusamus. Sunt aut
          tempora eum amet aliquid recusandae molestiae nulla. Porro error
          asperiores eveniet repellendus sapiente laboriosam, vel mollitia nihil
          at soluta minima consectetur accusamus magni? Veritatis perspiciatis
          rerum cumque corrupti accusamus. Minima harum saepe ea deserunt
          repellat, cum quod!
        </p>
      </div>
    </div>
  );
};

export default page;
