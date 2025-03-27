// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex:1, 
    backgroundColor: '#fff', 
    alignItems: 'center', 
    justifyContent: 'center'
  }, 

  rootStyle: {
    flex: 1, 
    //backgroundColor: '#002ddb', 
    borderColor: 'black',
    borderWidth: 4,
    paddingTop: 57, 
    alignItems: 'center', 
  },

  titleTextStyle: {
    flexDirection: 'row',
    //backgroundColor: '#002ddb',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    color: '#f7b1fc', 
    fontFamily: 'Verdana', 
    fontSize: 30, 
    fontWeight: 'bold', 
    margin: 5,
  }, 

  displayMessageTextStyle: {
    flexDirection: 'row',
    //backgroundColor: '#002ddb',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    color: '#f7b1fc', 
    fontFamily: 'Verdana', 
    fontSize: 25, 
    //fontWeight: 'bold', 
    margin: 5,
  }, 

  inputComponentStyle: {
    flex: 1, 
    borderWidth: 2,
    marginTop: 40,
    paddingTop: 40, 
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxStyle: {
    flex: 2, 
    borderWidth: 2, 
    alignItems: 'center',
  },

  box2: {
    borderWidth: 50, 
    height: 50, 
  },

  smallTextStyle: {
    color: '#fff', 
    fontFamily: 'Verdana', 
    fontSize: 20
  },

textInputStyle: {
    color: 'black', 
    fontFamily: 'Verdana', 
    fontSize: 13,
    fontStyle: 'italic',
    height: 50,  
    margin: 20,
    borderWidth: 2,
    padding: 12,  
    backgroundColor: '#DDDDDD',
    textAlignVertical: 'top', 
    textAlign: 'left', 
},


 buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e685ed',
    padding: 3,
    borderWidth: 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 150, 
    height: 90, 
    margin: 5,
},

titleButtonStyle: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#e685ed',
  padding: 10, 
  borderWidth: 3,
  borderRadius: 20, 
  width: 350,  
  height: 150, 
  alignSelf: 'center',  
  position: 'absolute', 
  top: '40%', 
  marginTop: 275, 
},

titleButtonTextStyle: {
  color: '#000000', 
  fontFamily: 'Verdana', 
  fontSize: 27
},

  buttonTextStyle: {
    color: '#430247', 
    fontFamily: 'Verdana', 
    fontSize: 22
  },

  buttonSection:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }, 

  inputSection:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  displaySection:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
     alignSelf: 'stretch',
     flexWrap: 'wrap',  

  },

  displayRowedItems:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
     alignSelf: 'stretch', 
     flexWrap: 'wrap', 
    
  },

  displayColumnItems:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },

  expenseRow: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',  
    width: '80%', 
    paddingVertical: 5, 
    alignSelf: 'stretch', 
    flexWrap: 'wrap', 
},

  rowInput:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
     alignSelf: 'stretch',
     flexWrap: 'wrap',  
  },

  addExpensesContainer:{
    borderBottomWidth: 10, 
    borderBottomColor:'#f7b1fc', 
    marginTop: 20,
    marginBottom: 20, 
    paddingBottom: 40, 
    paddingLeft: 27, 
    paddingRight: 27,
  }, 

  secondaryTextStyle: {
    color: '#fff', 
    fontFamily: 'Verdana', 
    fontSize: 15
  }, 

  expenseRowTextStyle: {
    color: '#000000',  
    fontFamily: 'Verdana', 
    fontSize: 13,  
    height: 55,  
    width: 200, 
    margin: 11,  
    borderWidth: 5, 
    borderColor: '#000000',  
    backgroundColor: '#FFFFFF',  
    padding: 2,  
    paddingLeft: 3,  
    paddingRight: 3,
    flexWrap: 'wrap', 
    textAlign: 'left', 
    flex: 1, 
    alignSelf: 'stretch'
  }, 


  smallButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a1a0b0',
    padding: 2,  
    borderWidth: 2, 
    borderTopLeftRadius: 6,  
    borderTopRightRadius: 6,  
    width: 50,
    height: 50,  
    margin: 3, 

}, 

  backgroundStyle: {
    flex: 1, 
    width: '100%', 
    height: '100%',
  }, 

  displayProductListContainer: {
    flexDirection: 'row', 
    borderWidth: 1, 
    padding: 10, 
    margin: 10, 
    justifyContent: 'space-between'
  }, 

  itemStyle: {
    width: '48%', 
    minHeight: 80, 
    marginBottom: 5, 
    backgroundColor: 'lightgray',
    paddingVertical: 15, 
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5, 
  },

  categoryContainer: {
    flexGrow: 1, 
    alignItems: 'center',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 5, 
    width: '100%',
  },

  itemTextStyle: {
    fontSize: 16, 
    fontWeight: 'bold',
    textAlign: 'center',
  },

viewBackground: {
    backgroundColor: '#ffffff',
    padding: 20, 
    alignItems: 'center', 
  },

  productTitle: {
    fontSize: 24,  
    fontWeight: 'bold',  
    marginBottom: 10,  
    textAlign: 'center', 
  },

  imgStyle: {
    width: 350, 
    height: 400, 
    resizeMode: 'contain', 
    borderRadius: 10,       
    alignSelf: 'center',   
  },

  productSubTitle: {
    fontSize: 18,  
    fontWeight: '500',  
    marginTop: 10, 
    textAlign: 'center',
  },

  ratingContainer: {
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop: 5,
  },

  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },

  reviewText: {
    fontSize: 16,
    color: '#666', 
  },

  productDesc: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: '#333',
  }

});

export default styles;
