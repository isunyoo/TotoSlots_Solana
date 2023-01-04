// https://github.com/kanthgithub/ticketbooking/tree/main/contracts
// https://jeancvllr.medium.com/solidity-tutorial-all-about-structs-b3e7ca398b1e
// SPDX-License-Identifier: MIT
pragma solidity >0.5.0;
import "./interfaces/TotoSlotStructLib.sol";
  
// Creating a contract 
contract TotoSlots {    

    // Declaring state variables of a type of fixed-size array 
    address private owner;  
    uint[6][] private arr_data;        
    uint256[] private arr_test;    
    
    // Creating mapping a storage variables for TotoSlots(issuerAddress -> TotoSlotsData)
    mapping(address => TotoSlotStructLib.TotoSlotsData) totoSlots;       
    // TotoSlotStructLib.TotoSlotsData[] TotoSlotsDataArray;    
    // mapping(address => TotoSlotStructLib.TotoSlotsData[]) TotoSlotsDataArray;

    // Save all the Slot‘s addresses who registered on a contract in an array.
    address[] public slotAccounts;    

    event saveTotoSlotsData(address indexed _from);
    
    modifier onlyOwner {
        require(msg.sender == owner, "only Owner can invoke the function");
        _;
    }

    function getOwner() public view returns(address){
        return owner;
    }

    modifier isIssuerAuthorised(address issuerAddress){        
        require(totoSlots[msg.sender].issuerAddress == issuerAddress , "not Authorized to Invoke the function");
        _;
    }
    
    // Function adding values to the mapping
    function setTotoSlotsData(address _address, string memory _issuerUID, string memory _issuerName, string memory _issuerEmail, uint[6][] memory _slotsData, string memory _issuerTime) public {    
     
        totoSlots[_address] = TotoSlotStructLib.TotoSlotsData(
            {
                issuerAddress: _address,
                issuerUID: _issuerUID,
                issuerName: _issuerName,
                issuerEmail: _issuerEmail,
                slotsData: _slotsData,
                createdTime: _issuerTime,
                createdBlockTime : block.timestamp
            }
        );

        emit saveTotoSlotsData(msg.sender);
        
        // Create a request instance        
        slotAccounts.push(_address);                                           
    }    

    // Function to return array of structure TotoSlotsData
    function getTotoSlotsData(address _inputAddress) public view returns (address, string memory, string memory, string memory, uint[6][] memory, string memory, uint256) { 
        
        // Copy the data into memory
        TotoSlotStructLib.TotoSlotsData memory slotsData = totoSlots[_inputAddress];
               
        // Break the struct's members out into a tuple in the same order that they appear in the struct
        return (slotsData.issuerAddress, slotsData.issuerUID, slotsData.issuerName, slotsData.issuerEmail, slotsData.slotsData, slotsData.createdTime, slotsData.createdBlockTime); 
    }

    // function getAllTotoSlotsData(address _inputAddress) public view returns (TotoSlotStructLib.TotoSlotsData[] memory) { 

    //     uint count=0;      
    //     for(uint i=0; i<slotAccounts.length; i++) {
    //         if(slotAccounts[i] == _inputAddress) {
    //             count++;
    //         }
    //     }      
        
    //     TotoSlotStructLib.TotoSlotsData[] memory totoSlotsData = new TotoSlotStructLib.TotoSlotsData[](count); 

    //     // Copy the data into memory
    //     TotoSlotStructLib.TotoSlotsData memory slotsData = totoSlots[_inputAddress];

    //     for(uint i=0; i<slotAccounts.length; i++) {
    //         if(slotAccounts[i] == _inputAddress) {
    //             totoSlotsData[i] = slotsData;                        
    //         }
    //     }       
    //     // Return Array of structure
    //     return totoSlotsData;        
    // }        

    // function getSlotsData(uint[] memory indexes) public view returns (address[] memory, string[] memory, string[] memory, string[] memory, uint[6][][] memory, string[] memory, uint256[] memory) {
    //     address[] memory issuerAddress = new address[](indexes.length);
    //     string[] memory issuerUID = new string[](indexes.length);
    //     string[] memory issuerName = new string[](indexes.length);
    //     string[] memory issuerEmail = new string[](indexes.length);
    //     uint[6][][] memory slotsData = new uint[6][][](indexes.length);
    //     string[] memory createdTime = new string[](indexes.length);
    //     uint256[] memory createdBlockTime = new uint256[](indexes.length);         

    //     for (uint i=0; i<indexes.length; i++) {
    //         TotoSlotStructLib.TotoSlotsData storage data = TotoSlotsDataArray[indexes[i]];
    //         issuerAddress[i] = data.issuerAddress;
    //         issuerUID[i] = data.issuerUID;
    //         issuerName[i] = data.issuerName;
    //         issuerEmail[i] = data.issuerEmail;
    //         slotsData[i] = data.slotsData;
    //         createdTime[i] = data.createdTime;
    //         createdBlockTime[i] = data.createdBlockTime;            
    //     }

    //     return (issuerAddress, issuerUID, issuerName, issuerEmail, slotsData, createdTime, createdBlockTime);         
    // }

    // Counting all dynamic array from a Mapping
    function countAllSlotAccounts() view public returns (uint) {
        return slotAccounts.length;
    }

    // Counting specific dynamic array from a Mapping
    function countSlotAccount(address _address) view public returns (uint) {        
        uint count=0;      
        for(uint i=0; i<slotAccounts.length; i++) {
            if(slotAccounts[i] == _address) {
                count++;
            }
        }           
        return count;
    }

    // Function to get all stored addresses of dynamic array 
    function getAllSlotAccounts() view public returns (address[] memory) {
        return slotAccounts;
    }    
    
    // Function to add data in dynamic array test
    function addData(uint256 num) public {        
        arr_test.push(num);
    }

    // Function to search an element in dynamic array
    function search(uint256 num) view public returns (bool) {
        bool searchStatus;
        uint i;        
        for(i=0; i<arr_test.length; i++) {
            if(arr_test[i] == num) {
                searchStatus = true;
                return searchStatus;
            }
        }        
        if(i >= arr_test.length)
        searchStatus = false;
        return searchStatus;
    } 

    // Function to store all data in dynamic array 
    function array_pushData(uint[6][] memory slotListNumbers) public { 
        // Dynamic array outright with its elements are arrays of fixed size
        uint count = slotListNumbers.length;
        arr_data = new uint[6][](count);        
        for(uint idx=0; idx<count; idx++) { 
            arr_data[idx] = slotListNumbers[idx];           
        }                                            
    }          

    // Function to get all data of dynamic array 
    function array_popAllData() view public returns (uint[6][] memory) {    
        return arr_data;
    }

    // Defining a function to find the length of the array
    function array_getLength() view public returns (uint256) {  
        uint x = arr_data.length;
        return x; 
    }  

    // Return an array stored in the dynamic dimension will throw if index > flags.length-1 (index starts at 0)
    function array_getArray(uint256 index) view public returns (uint[6] memory) {
        return(arr_data[index]);
    }   
     
    // Current block timestamp is returned by now ( http://www.unixtimestamp.com/ ex, $ date -d @block.timestamp )
    function time_Call() view public returns (uint256) {        
        return block.timestamp;
    }

    // Block Number is returned using block.number
    function block_Call() view public returns (uint256) {
        return block.number; 
    }
    
}
