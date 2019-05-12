attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform sampler2D uSampler3;

varying vec2 vTextureCoord;
varying float vHeight;

void main() {
	vTextureCoord = aTextureCoord;

	vec4 filter = texture2D(uSampler2, vTextureCoord);

    float heightOffset = filter.b * 10.0;
	

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + vec3(0.0, 0.0, heightOffset), 1.0);

	vHeight = aVertexPosition.z + heightOffset;
}

