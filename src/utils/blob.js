/**
  * https://lab.hakim.se/blob/03/
  */
let BlobWorld = new function() {
  
  var SCREEN_WIDTH = window.innerWidth;
  var SCREEN_HEIGHT = window.innerHeight;
  
  var canvas;
  var context;
  var blobs = [];
  
  var dragBlob;
  
  var screenX = window.screenX;
  var screenY = window.screenY;
  
  var mouseX = (window.innerWidth - SCREEN_WIDTH);
  var mouseY = (window.innerHeight - SCREEN_HEIGHT);
  var mouseIsDown = false;
  var mouseDownOffset = { x: 0, y: 0 };
  
  var worldRect = { x: 0, y: 0, width: 0, height: 0 };
  
  var gravity = { x: 0, y: 1.2 };
  
  var mergeQueue = { blobA: -1, blobB: -1 };
  
  var skinIndex = 0;
  var skins = [
       { fillStyle: 'rgba(0,200,250,1.0)', strokeStyle: '#ffffff', lineWidth: 5, debug: false },
       { fillStyle: '', strokeStyle: '', lineWidth: 0, debug: true },
     { fillStyle: 'rgba(0,0,0,0.1)', strokeStyle: 'rgba(255,255,255,1.0)', lineWidth: 6, debug: false },
       { fillStyle: 'rgba(0,230,110,1.0)', strokeStyle: 'rgba(0,0,0,1.0)', lineWidth: 2, debug: false },
       { fillStyle: 'rgba(255,255,0,1.0)', strokeStyle: 'rgba(0,0,0,1.0)', lineWidth: 4, debug: false },
       { fillStyle: 'rgba(255,255,255,1.0)', strokeStyle: 'rgba(0,0,0,1.0)', lineWidth: 4, debug: false }
  ];
  
  this.init = function() {
    
    canvas = document.getElementById( 'world' );
    
    if (canvas && canvas.getContext) {
      context = canvas.getContext('2d');
      
      window.addEventListener('mousemove', documentMouseMoveHandler, false);
      canvas.addEventListener('mousedown', documentMouseDownHandler, false);
      canvas.addEventListener('dblclick', documentDoubleClickHandler, false);
      window.addEventListener('mouseup', documentMouseUpHandler, false);
      document.addEventListener('touchstart', documentTouchStartHandler, false);
      document.addEventListener('touchmove', documentTouchMoveHandler, false);
      document.addEventListener('touchend', documentTouchEndHandler, false);
      document.addEventListener('keydown', documentKeyDownHandler, false);
      window.addEventListener('resize', windowResizeHandler, false);
      
      document.getElementById( 'keyboardUp' ).addEventListener('click', keyboardUpHandler, false);
      document.getElementById( 'keyboardDown' ).addEventListener('click', keyboardDownHandler, false);
      document.getElementById( 'keyboardLeft' ).addEventListener('click', keyboardLeftHandler, false);
      document.getElementById( 'keyboardRight' ).addEventListener('click', keyboardRightHandler, false);
      
      createBlob( { x: SCREEN_WIDTH*0.5, y: SCREEN_HEIGHT*0.1 } );
      
      windowResizeHandler();
      
      setInterval( loop, 1000 / 60 );
    }
  };
  
  function createBlob( position ) {
    let blob = new Blob();
    
    blob.position.x = position.x;
    blob.position.y = position.y;
    
    blob.generateNodes();
    
    blobs.push( blob );
  }
  
  function splitBlob( blob ) {
    if( blob.quality > 8 ) {
      blobs.push( blob.split() );
    }
  }
  
  function mergeBlobs( blobA, blobB ) {
    var t = getTime();
    
    if( !blobs[blobA] || !blobs[blobB] ) {
      return;
    }
    
    if( t - blobs[blobA].lastSplitTime > 500 && t - blobs[blobB].lastSplitTime > 500 ) {
      blobs[blobA].merge( blobs[blobB] );
      blobs.splice( blobB, 1 );
    }
  }

  function documentMouseMoveHandler(event) {
    mouseX = event.clientX - (window.innerWidth - SCREEN_WIDTH) * .5;
    mouseY = event.clientY - (window.innerHeight - SCREEN_HEIGHT) * .5;
  }
  
  function documentMouseDownHandler(event) {
    event.preventDefault();
    
    mouseIsDown = true;
    
    dragBlob = blobs[ findClosestBody( blobs, { x: mouseX, y: mouseY } ) ];
    var closestNodeIndex = findClosestBody( dragBlob.nodes, { x: mouseX, y: mouseY } );
    dragBlob.dragNodeIndex = closestNodeIndex;
    
    mouseDownOffset.y = 100;
  }
  
  function documentMouseUpHandler(event) {
    mouseIsDown = false;
    
    if( dragBlob ) {
      dragBlob.dragNodeIndex = -1;
      dragBlob = null;
    }
  }
  
  function documentTouchStartHandler(event) {
    if(event.touches.length == 1) {
      event.preventDefault();
      
      mouseIsDown = true;
      
      mouseX = event.touches[0].pageX - (window.innerWidth - SCREEN_WIDTH) * .5;
      mouseY = event.touches[0].pageY - (window.innerHeight - SCREEN_HEIGHT) * .5;
      
      dragBlob = blobs[ findClosestBody( blobs, { x: mouseX, y: mouseY } ) ];
      var closestNodeIndex = findClosestBody( dragBlob.nodes, { x: mouseX, y: mouseY } );
      dragBlob.dragNodeIndex = closestNodeIndex;
      
      mouseDownOffset.y = 100;
    }
  }
  
  function documentTouchMoveHandler(event) {
    if(event.touches.length == 1) {
      event.preventDefault();

      mouseX = event.touches[0].pageX - (window.innerWidth - SCREEN_WIDTH) * .5;
      mouseY = event.touches[0].pageY - (window.innerHeight - SCREEN_HEIGHT) * .5;
    }
  }
  
  function documentTouchEndHandler(event) {
    mouseIsDown = false;
    
    if( dragBlob ) {
      dragBlob.dragNodeIndex = -1;
      dragBlob = null;
    }
  }
  
  function documentDoubleClickHandler(event) {
    var mouse = { x: mouseX, y: mouseY };
    
    var blob = blobs[findClosestBody( blobs, mouse )];
    
    if( distanceBetween( blob.position, mouse ) < blob.radius + 30 ) {
      splitBlob( blob );
    }
  }
  
  function documentKeyDownHandler(event) {
    switch( event.keyCode ) {
      case 40:
        changeBlobRadius( -10 );
        event.preventDefault();
        break;
      case 38:
        changeBlobRadius( 10 );
        event.preventDefault();
        break;
      case 37:
        changeSkin( -1 );
        event.preventDefault();
        break;
      case 39:
        changeSkin( 1 );
        event.preventDefault();
        break;
    }
  }
  
  function keyboardUpHandler(event) {
    event.preventDefault();
    changeBlobRadius( 20 );
    }
  
  function keyboardDownHandler(event) {
    event.preventDefault();
    changeBlobRadius( -20 );
  }
  
  function keyboardLeftHandler(event) {
    event.preventDefault();
    changeSkin( -1 );
  }
  
  function keyboardRightHandler(event) {
    event.preventDefault();
    changeSkin( 1 );
  }
  
  function changeSkin( offset ) {
    skinIndex += offset;
    skinIndex = skinIndex < 0 ? skins.length-1 : skinIndex;
    skinIndex = skinIndex > skins.length-1 ? 0 : skinIndex;
  }
  
  function changeBlobRadius( offset ) {
    for( var i = 0, len = blobs.length; i < len; i++ ) {
      let blob = blobs[i];
      
      var oldRadius = blob.radius;
      
      blob.radius += offset;
      blob.radius = Math.max( 40, Math.min( blob.radius, 280 ) );
      
      if( blob.radius != oldRadius ) {
        blob.updateNormals();
      }
    }
  }
  
  function findClosestBody( bodies, position ) {
    var closestDistance = 9999;
    var currentDistance = 9999;
    var closestIndex = -1;
    
    for( var i = 0, len = bodies.length; i < len; i++ ) {
      var body = bodies[i];
      
      currentDistance = distanceBetween( body.position, { x: position.x, y: position.y } );
      
      if( currentDistance < closestDistance ) {
        closestDistance = currentDistance;
        closestIndex = i;
      }
    }
    
    return closestIndex;
  }
  
  function windowResizeHandler() {
    SCREEN_WIDTH = window.innerWidth;
    SCREEN_HEIGHT = window.innerHeight;
    
    canvas.width = SCREEN_WIDTH;
    canvas.height = SCREEN_HEIGHT;
    
    worldRect.x = 3;
    worldRect.y = 3;
    worldRect.width = SCREEN_WIDTH-6;
    worldRect.height = SCREEN_HEIGHT-6;
  }

  function loop() {
    
    var skin = skins[skinIndex];
    
    var dirtySpread = 80;
    
    var u1, u2, ulen, blob;
    
    for( u1 = 0, ulen = blobs.length; u1 < ulen; u1++ ) {
      blob = blobs[u1];
      
      context.clearRect(blob.dirtyRegion.left-dirtySpread,blob.dirtyRegion.top-dirtySpread,blob.dirtyRegion.right-blob.dirtyRegion.left+(dirtySpread*2),blob.dirtyRegion.bottom-blob.dirtyRegion.top+(dirtySpread*2));
      
      blob.dirtyRegion = { left: worldRect.x + worldRect.width, top: worldRect.y + worldRect.height, right: 0, bottom: 0 };
    }
    
    if( mergeQueue.blobA != -1 && mergeQueue.blobB != -1 ) {
      mergeBlobs( mergeQueue.blobA, mergeQueue.blobB );
      
      mergeQueue.blobA = -1;
      mergeQueue.blobB = -1;
    }
    
    if( dragBlob ) {
      dragBlob.velocity.x += ( ( mouseX + mouseDownOffset.x ) - dragBlob.position.x ) * 0.01;
      dragBlob.velocity.y += ( ( mouseY + mouseDownOffset.y ) - dragBlob.position.y ) * 0.01;
    }
    
    for( u1 = 0, ulen = blobs.length; u1 < ulen; u1++ ) {
      blob = blobs[u1];
      
      for( u2 = 0; u2 < ulen; u2++ ) {
        var otherBlob = blobs[u2];
        
        if( otherBlob != blob ) {
          var distance = distanceBetween( { x: blob.position.x, y: blob.position.y }, { x: otherBlob.position.x, y: otherBlob.position.y } );
          
          if( distance < blob.radius + otherBlob.radius ) {
            mergeQueue.blobA = u1;
            mergeQueue.blobB = u2;
          }
        }
      }
      
      blob.velocity.x += ( window.screenX - screenX ) * (0.04 + (Math.random()*0.1));
      blob.velocity.y += ( window.screenY - screenY ) * (0.04 + (Math.random()*0.1));
      
      var friction = { x: 1.035, y: 1.035 };
      
      if( blob.position.x > worldRect.x + worldRect.width ) {
        blob.velocity.x -= ( blob.position.x - worldRect.width ) * 0.05;
        friction.y = 1.07;
      }
      else if( blob.position.x < worldRect.x ) {
        blob.velocity.x += Math.abs( worldRect.x - blob.position.x ) * 0.05;
        friction.y = 1.07;
      }
      
      if( blob.position.y > worldRect.y + worldRect.height ) {
        blob.velocity.y -= ( blob.position.y - worldRect.height ) * 0.05;
        friction.x = 1.07;
      }
      else if( blob.position.y < worldRect.y ) {
        blob.velocity.y += Math.abs( worldRect.y - blob.position.y ) * 0.05;
        friction.x = 1.07;
      }
      
      blob.velocity.x += gravity.x;
      blob.velocity.y += gravity.y;
      
      blob.velocity.x /= friction.x;
      blob.velocity.y /= friction.y;
      
      blob.position.x += blob.velocity.x;
      blob.position.y += blob.velocity.y;
      
      var i, j, len, node, joint, position;
      
      for (i = 0, len = blob.nodes.length; i < len; i++) {
        node = blob.nodes[i];
        
        node.ghost.x = node.position.x;
        node.ghost.y = node.position.y;
      }
      
      var dragNode = blob.nodes[blob.dragNodeIndex];
      if( dragNode ) {
        var angle = Math.atan2( mouseY - (blob.position.y-80), mouseX - blob.position.x );
        
        blob.rotation += ( angle - blob.rotation ) * 0.03;
        blob.updateNormals();
      }
      
      for (i = 0, len = blob.nodes.length; i < len; i++) {
        node = blob.nodes[i];
        
        node.normal.x += ( node.normalTarget.x - node.normal.x ) * 0.05;
        node.normal.y += ( node.normalTarget.y - node.normal.y ) * 0.05;
        
        position = { x: blob.position.x, y: blob.position.y };
        
        for( j = 0; j < node.joints.length; j++ ) {
          joint = node.joints[j];
          
          var strainX = ( (joint.node.ghost.x - node.ghost.x) - (joint.node.normal.x - node.normal.x) );
          var strainY = ( (joint.node.ghost.y - node.ghost.y) - (joint.node.normal.y - node.normal.y) );
          
          position.x += strainX * joint.strength;
          position.y += strainY * joint.strength;
        }
        
        position.x += node.normal.x;
        position.y += node.normal.y;
        
        if( i == blob.dragNodeIndex ) {
          position.x += ( mouseX - position.x ) * 0.98;
          position.y += ( mouseY - position.y ) * 0.98;
        }
        
        node.position.x += ( position.x - node.position.x ) * 0.1;
        node.position.y += ( position.y - node.position.y ) * 0.1;
        
        node.position.x = Math.max( Math.min( node.position.x, worldRect.x + worldRect.width ), worldRect.x );
        node.position.y = Math.max( Math.min( node.position.y, worldRect.y + worldRect.height ), worldRect.y );
        
        blob.dirtyRegion.left = Math.min(blob.dirtyRegion.left, node.position.x);
        blob.dirtyRegion.top = Math.min(blob.dirtyRegion.top, node.position.y);
        blob.dirtyRegion.right = Math.max(blob.dirtyRegion.right, node.position.x);
        blob.dirtyRegion.bottom = Math.max(blob.dirtyRegion.bottom, node.position.y);
      }
      
      if( !skin.debug ) {
           context.beginPath();
        context.fillStyle = skin.fillStyle;
        context.strokeStyle = skin.strokeStyle;
        context.lineWidth = skin.lineWidth;
      }
      
      var cn = getArrayElementByOffset( blob.nodes, 0, -1 );
      var nn = getArrayElementByOffset( blob.nodes, 0, 0 );
      
      context.moveTo( cn.position.x + ( nn.position.x - cn.position.x ) / 2, cn.position.y + ( nn.position.y - cn.position.y ) / 2 );
      
      for (i = 0, len = blob.nodes.length; i < len; i++) {
        cn = getArrayElementByOffset( blob.nodes, i, 0 );
        nn = getArrayElementByOffset( blob.nodes, i, 1 );
        
        if( skin.debug ) {
          context.beginPath();
          context.lineWidth = 1;
          context.strokeStyle = "#ababab";
          
          for( j = 0; j < cn.joints.length; j++ ) {
            joint = cn.joints[j];
            context.moveTo( cn.position.x, cn.position.y );
            context.lineTo( joint.node.position.x, joint.node.position.y );
          }
          
          context.stroke();
          
          context.beginPath();
          context.fillStyle = i == 0? "#00ff00" : "#dddddd";
          context.arc(cn.position.x, cn.position.y, 5, 0, Math.PI*2, true);
          context.fill();
        }
        else {
          context.quadraticCurveTo( cn.position.x, cn.position.y, cn.position.x + ( nn.position.x - cn.position.x ) / 2, cn.position.y + ( nn.position.y - cn.position.y ) / 2 );
        }
      }
      
      if( skin.debug ) {
      }
      
      context.stroke();
      context.fill();
    }
    
    screenX = window.screenX;
    screenY = window.screenY;
  }
    
  
};

function Blob() {
  this.position = { x: 0, y: 0 };
  this.velocity = { x: 0, y: 0 };
  this.radius = 120;
  this.quality = 32;
  this.nodes = [];
  this.rotation = -Math.PI * 0.5;
  this.dragNodeIndex = -1;
  this.dirtyRegion = { left: 0, top: 0, right: 0, bottom: 0 };
  this.lastSplitTime = 0;
  
  this.generateNodes = function() {
    this.nodes = [];
    
    var i, n;
    
    for (i = 0; i < this.quality; i++) {
      n = {
        normal: { x: 0, y: 0 },
        normalTarget: { x: 0, y: 0 },
        position: { x: this.position.x, y: this.position.y },
        ghost: { x: this.position.x, y: this.position.y },
        angle: 0
      };
      
      this.nodes.push( n );
    }
    
    this.updateJoints();
    
    this.updateNormals();
  };
  
  this.updateJoints = function() {
    for (var i = 0; i < this.quality; i++) {
      var n = this.nodes[i];
      
      n.joints = [
        { 
          node: getArrayElementByOffset( this.nodes, i, -1 ),
          strength: 2.2
        },
        { 
          node: getArrayElementByOffset( this.nodes, i, 1 ),
          strength: 2.2
        }
      ];
      
      n.joints.push( { 
        node: getArrayElementByOffset( this.nodes, i, -2 ),
        strength: 2.2
      } );
      
      n.joints.push( { 
        node: getArrayElementByOffset( this.nodes, i, 2 ),
        strength: 2.2
      } );
      
    }
  };
  
  this.updateNormals = function() {
    var i, j, n;
    
    for (i = 0; i < this.quality; i++) {
      
      var n = this.nodes[i];
      
      if( this.dragNodeIndex != -1 ) {
        j = i - this.dragNodeIndex;
        j = j < 0 ? this.quality + j : j;
      }
      else {
        j = i;
      }
      
      n.angle = ( (j / this.quality ) * Math.PI * 2 ) + this.rotation;
      
      n.normalTarget.x = Math.cos( n.angle ) * this.radius;
      n.normalTarget.y = Math.sin( n.angle ) * this.radius;
      
      if( n.normal.x == 0 && n.normal.y == 0 ) {
        n.normal.x = n.normalTarget.x;
        n.normal.y = n.normalTarget.y;
      }
    }
  };
  
  this.split = function() {
    
    var velocitySpread = this.radius / 10;
    var nodeSpread = Math.round( this.nodes.length * 0.5 );
    var radiusSpread = this.radius * 0.5;
    
    var sibling = new Blob();
    
    sibling.position.x = this.position.x;
    sibling.position.y = this.position.y;
    
    sibling.velocity.x = velocitySpread;
    sibling.velocity.y = this.velocity.y;
    
    sibling.nodes = [];
    
    var i = 0;
    while( i++ < nodeSpread ) {
      sibling.nodes.push( this.nodes.shift() );
    }
    
    sibling.radius = radiusSpread;
    sibling.quality = sibling.nodes.length;
    
    this.velocity.x = -velocitySpread;
    this.radius = radiusSpread;
    this.quality = this.nodes.length;
    
    this.dragNodeIndex = -1;
    this.updateJoints();
    this.updateNormals();
    
    sibling.dragNodeIndex = -1;
    sibling.updateJoints();
    sibling.updateNormals();
    
    sibling.lastSplitTime = getTime();
    this.lastSplitTime = getTime();
    
    return sibling;
    
  };
  
  this.merge = function( sibling ) {
    this.velocity.x *= 0.5;
    this.velocity.y *= 0.5;
    
    this.velocity.x += sibling.velocity.x * 0.5;
    this.velocity.y += sibling.velocity.y * 0.5;
    
    while( sibling.nodes.length ) {
      this.nodes.push( sibling.nodes.shift() );
    }
    
    this.quality = this.nodes.length;
    this.radius += sibling.radius;
    
    this.dragNodeIndex = -1;
    
    this.updateNormals();
    this.organizeNodesByProximity();
    this.updateJoints();
  };
  
  this.organizeNodesByProximity = function() {
    var i, j, outer, inner;
    
    var closestDistance, currentDistance, closestIndex;
    
    var newNodes = this.nodes.concat();
    var blackListed = [];
    
    for (i = 0; i < this.quality; i++) {
      outer = newNodes[i];
      
      currentDistance = 9999;
      closestDistance = 9999;
      closestIndex = -1;
      
      for(j = 0; j < this.quality; j++) {
        inner = newNodes[j];
        
        currentDistance = distanceBetween( inner.position, outer.position );
        
        if( currentDistance < closestDistance && blackListed.indexOf(inner) === -1 ) {
          closestDistance = currentDistance;
          closestIndex = j;
        }
      }
      
      this.nodes[i] = newNodes[closestIndex];
    }
    
  };
}

function getArrayElementByOffset( array, index, offset ) {
  if( array[index+offset] ) {
    return array[index+offset];
  }
  
  if( index+offset > array.length-1 ) {
    return array[index - array.length + offset];
  }
  
  if( index+offset < 0 ) {
    return array[array.length + ( index + offset )];
  }
}

function sortByField( list, field ) {
  var sortOnField = function( a, b ) {
    return a[field] - b[field];
  };
  
  list.sort( sortOnField );
}

function getTime() {
  return new Date().getTime();
}

function distanceBetween(p1,p2) {
  var dx = p2.x-p1.x;
  var dy = p2.y-p1.y;
  return Math.sqrt(dx*dx + dy*dy);
}


BlobWorld.init();
