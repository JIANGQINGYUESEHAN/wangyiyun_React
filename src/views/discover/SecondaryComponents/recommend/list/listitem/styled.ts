import styled from "styled-components";

const ListItemWrapper = styled.div`
.content{
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 height: 100%;
}
.top{
  display: flex;
  height: 120px;
  width: 100%;
  border: 1px solid red;
}
.image_item{
   flex: 3;
   background-color: aliceblue;
   display: flex;
   justify-content: center;
   padding-top: 15px;
}
.image{
  width: 80px;
  height: 80px;

}
.div_span{
  flex: 4;
  background-color: antiquewhite;
}

.Span1{
    font-size: 14px;
    color: #333;
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-text-size-adjust: none;
    padding-top: 20px;
    padding-left: 15px;
    margin-bottom: 10px;
    cursor: pointer;
}
.icon{
display: flex;
padding-left: 15px;

}
.bacImage{
  background: url(${require('@/assets/img/sprite_02.png')}) no-repeat -267px -205px;
	width: 22px;
	height: 22px;
  margin-right: 10px;
  cursor: pointer;
}
.bacImage1{
  background: url(${require('@/assets/img/sprite_02.png')}) no-repeat -300px -207px;
	width: 20px;
	height: 19px;
  margin-top: 1px;


  cursor: pointer;
}
.bacImage:hover{
  background: url(${require('@/assets/img/sprite_02.png')}) no-repeat -267px -235px;;
	width: 22px;
	height: 22px;
  margin-right: 10px;
  cursor: pointer;
}
.bacImage1:hover{
  background: url(${require('@/assets/img/sprite_02.png')}) no-repeat  -300px -237px;
	width: 20px;
	height: 19px;
  margin-top: 1px;
  cursor: pointer;
}
.bacImage2{
  background: url(${require('@/assets/img/sprite_02.png')}) no-repeat  no-repeat -330px -237px;
	width:20px;
	height: 19px;
  margin-top: 1px;
  cursor: pointer;
}

.single{
background-color: #E8E8E8;
}
.even{
  background-color: #f5f5f5;
}
.list{
  width: 100%;
  height: 32px;
  display: flex;
  line-height: 40px;
  align-self: center;
  cursor: pointer;
}
.sequence{
    text-align: center;
    line-height: 32px;
    color: #666;
    font-size: 16px;
    width: 32px;
    height: 32px;
}
.Name{
   width: 200px;
   height: 32px;
   line-height: 32px;
   font-size: 12px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;

}
.NameSpan{


}
.btn{
  width:80px;
  height: 32px;
  display: flex;
  align-items: center;
}
.play{
  flex: 1;
}
.add{
  flex: 1;
}
.file{
  flex: 1;
}
.more{
font-size: 12px;
text-align: right;
}
`

export default ListItemWrapper
