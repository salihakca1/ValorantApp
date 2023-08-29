import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
  },
  headerContainer: {
    backgroundColor: 'black', 
  },
  backgroundImage: {
    width: windowWidth,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 5,
    borderRadius: 20  ,
    alignItems: 'center',
  },
  image: {
    width: 220,
    height: 270,
    borderRadius: 100,
    marginBottom: 5,
  },
  name: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  developerName: {
    fontSize: 16,
    color: 'white',
  },
  descriptionContainer: {
    padding: 5,
    marginTop: 5,
    borderRadius: 10,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white', 
    textAlign: 'center', 
  },
  descriptionTextContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    borderRadius: 10,
    padding: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: 'white', 
  },
  abilitiesContainer: {
    padding: 5,
    borderRadius: 10,
  },
  abilitiesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white', 
    textAlign: 'center', 
  },
  imageListContainer: {
    marginTop: 5,
    paddingHorizontal: 10,
    flexDirection: 'row', 
  },
  smallImage: {
    width: 40, 
    height: 40, 
    marginRight: 3, 
    borderRadius: 10,
  },
  imageListContent: {
    flexGrow: 1,
    justifyContent:'space-evenly'
  }, 
  imageWrapper: {
    borderRadius: 10,
    padding: 5,
    marginRight: 3,
  },
  selectedImageWrapper: {
    backgroundColor: "black",
  },
});
