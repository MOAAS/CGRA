attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform float timeFactor;
uniform sampler2D uSampler;
uniform sampler2D uSampler2;

varying vec2 vTextureCoord;

void main() {
	vTextureCoord = aTextureCoord;

	vec4 filter = texture2D(uSampler2, vTextureCoord + vec2(timeFactor, timeFactor));

	vec3 offset = vec3(0.0, 0.0, filter.b) / 10.0;

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);

}

